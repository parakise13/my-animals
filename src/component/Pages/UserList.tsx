import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHttpReq from "../../shared/hooks/http-hook";
import Avatar from "../Layout/Avatar";
import LoadingSpinner from "../Layout/LoadingSpinner";
import ErrorModal from "./ErrorModal";

import classes from "./UserList.module.scss";

export interface UserProps {
  id: string;
  name: string;
  imageUrl: string;
  animals: [];
}

const UserList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpReq();
  const [loadedUsers, setLoadedUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/`
        );
        setLoadedUsers(responseData.users);
      } catch (err: any) {}
    };
    getUserList();
  }, [sendRequest]);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner isLoading={isLoading} />}
      {error && <ErrorModal onClose={clearError} errorText={error} />}
      {!isLoading && loadedUsers && loadedUsers.length === 0 && (
        <div className={classes["user-list__empty"]}>사용자가 존재하지 않습니다.</div>
      )}
      {!isLoading && loadedUsers &&
        loadedUsers.map((user) => {
          return (
            <ul key={user.id} className={classes["user-list"]}>
              <li>
                <div className={classes["user-list__container"]}>
                  <Link to={`/${user.id}/animals`}>
                    <div className={classes["user-list__image"]}>
                      <Avatar
                        src={`${process.env.REACT_APP_IMAGE_URL}/${user.imageUrl}`}
                        alt={user.name}
                      />
                    </div>
                    <div className={classes["user-list__info"]}>
                      <p>{user.name}</p>
                      <p>
                        반려동물 : {user.animals.length}
                        마리
                      </p>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          );
        })}
    </Fragment>
  );
};

export default UserList;
