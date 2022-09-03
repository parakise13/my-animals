import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import useHttpReq from "../../shared/hooks/http-hook";
import LoadingSpinner from "../Layout/LoadingSpinner";
import ErrorModal from "./ErrorModal";

import classes from "./UserAnimalList.module.scss";

export interface AnimalProps {
  id?: string;
  animalName: string;
  species: string;
  age: number;
  description: string;
  imageUrl: string;
  creator: string;
}

const UserAnimalList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpReq();
  const [loadedAnimals, setLoadedAnimals] = useState<AnimalProps[]>([]);
  const userId = useParams().userId;
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserAnimalList = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/animals/user/${userId}`
        );
        setLoadedAnimals(responseData.animals);
      } catch (err: any) {}
    };
    getUserAnimalList();
  }, [userId, sendRequest]);

  const handleDelete = async (animalId: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/animals/${animalId}`,
        "DELETE",
        { Authorization: `Bearer ${auth.token}` }
      );
      setLoadedAnimals((prevAnimals) => {
        console.log(prevAnimals);
        return prevAnimals.filter((animal) => animal.id !== animalId);
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (loadedAnimals) {
    if (loadedAnimals.length === 0) {
      if (auth.userId) {
        return (
          <div className={classes["no-animal"]}>
            <h2>소개할 반려동물이 없습니다.</h2>
            {auth.userId === userId ? (
              <>
                <h2>추가하시겠어요?</h2>
                <Link to="/add-animal">추가하기</Link>
              </>
            ) : null}
          </div>
        );
      } else {
        return (
          <div className={classes["no-animal"]}>
            <h2>소개할 반려동물이 없습니다.</h2>
          </div>
        );
      }
    }
  }

  return (
    <Fragment>
      {error && <ErrorModal onClose={clearError} errorText={error} />}
      <ul className={classes["animal-list"]}>
        {isLoading && <LoadingSpinner isLoading={isLoading} />}
        {!isLoading &&
          loadedAnimals &&
          loadedAnimals.map((animal) => {
            return (
              <li key={animal.id}>
                <div className={classes["animal-list__wrapper"]}>
                  <div className={classes["animal-list__info"]}>
                    <div className={classes["animal-list__image"]}>
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}/${animal.imageUrl}`}
                        alt={animal.animalName}
                      />
                    </div>
                    <div className={classes["animal-list__detail"]}>
                      <p>이름 : {animal.animalName}</p>
                      <p>종류 : {animal.species}</p>
                      <p>나이 : {animal.age}살</p>
                    </div>
                  </div>
                  <div className={classes["animal-list__desc"]}>
                    {animal.description.split("\n").map((line) => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </div>
                </div>
                {auth.userId === animal.creator && (
                  <div className={classes["animal-list__btns"]}>
                    <Link to={`/animal/${animal.id}`}>수정하기</Link>
                    <button
                      onClick={() => {
                        handleDelete(animal.id || "");
                      }}
                    >
                      지우기
                    </button>
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default UserAnimalList;
