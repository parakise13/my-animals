import {  useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const Navigation = () => {
  const auth = useContext(AuthContext);
	const navigate = useNavigate();

  const handleClickLogout = () => {
    auth.logout();
    navigate("/");
	};
	
  return (
    <>
      {auth.isLoggedIn ? (
        <>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#91a8d0" : "#353839",
              })}
              to={`/all-users`}
            >
              모든 집사들
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#91a8d0" : "#353839",
              })}
              to={`/${auth.userId}/animals`}
            >
              나의 반려동물
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#91a8d0" : "#353839",
              })}
              to="/add-animal"
            >
              반려동물 추가하기
            </NavLink>
          </li>
          <li>
            <button onClick={handleClickLogout}>LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#91a8d0" : "#353839",
              })}
              to={`/all-users`}
            >
              모든 집사들
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#91a8d0" : "#353839",
              })}
              to="/auth"
            >
              LogIn
            </NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default Navigation;
