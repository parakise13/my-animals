import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import LoadingSpinner from "./component/Layout/LoadingSpinner";
import { AuthContext } from "./shared/context/auth-context";
import { ModalContext } from "./shared/context/modal-context";

const UserList = React.lazy(() => import("./component/Pages/UserList"));
const UserAnimalList = React.lazy(
  () => import("./component/Pages/UserAnimalList")
);
const UpdateAnimal = React.lazy(() => import("./component/Pages/UpdateAnimal"));
const Main = React.lazy(() => import("./component/Pages/Main"));
const Auth = React.lazy(() => import("./component/Pages/Auth"));
const AddAnimal = React.lazy(() => import("./component/Pages/AddAnimal"));
const Header = React.lazy(() => import("./component/Layout/Header"));

let logoutTimer: any;

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<
    undefined | null | Date
  >();
  const [userId, setUserId] = useState<string | null>("");

  const login = (uid: string, token: string, expirationDate?: Date) => {
    setToken(token);
    setUserId(uid);

    const tokenExpirationDate =
      typeof expirationDate === "object" &&
      expirationDate !== null &&
      "toISOString" in expirationDate
        ? expirationDate
        : new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpirationDate]);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.token && new Date(parsedData.expiration) > new Date()) {
        login(parsedData.userId, parsedData.token, parsedData.expiration);
      }
    }
  }, []);

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  return (
    <ModalContext.Provider value={{ isModalOpened, closeModal, openModal }}>
      <AuthContext.Provider
        value={{ isLoggedIn: !!token, token, login, logout, userId }}
      >
        <div className="App">
          <Header />
          <main>
            <Suspense
              fallback={
                <div>
                  <LoadingSpinner isLoading={true} />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/all-users" element={<UserList />} />
                <Route path="/:userId/animals" element={<UserAnimalList />} />
                <Route path="/add-animal" element={<AddAnimal />} />
                <Route path="/animal/:animalId" element={<UpdateAnimal />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </AuthContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
