import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router";
import ImageUpload from "../Layout/ImageUpload";
import Input from "../Layout/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { Fragment, useContext, useState } from "react";

import useForm from "../../shared/hooks/form-hook";

import LoadingSpinner from "../Layout/LoadingSpinner";
import ErrorModal from "./ErrorModal";
import classes from "./Auth.module.scss";
import useHttpReq from "../../shared/hooks/http-hook";

export interface LoadingProps {
  isLoading: boolean;
}

const Auth = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpReq();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleClickChangeMode = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          imageUrl: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          imageUrl: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          "POST",
          { "Content-Type": "application/json" },
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          })
        );

        auth.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (err: any) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("name", formState.inputs.name.value);
        formData.append("email", formState.inputs.email.value);
        formData.append("password", formState.inputs.password.value);
        formData.append("imageUrl", formState.inputs.imageUrl.value);

        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          "POST",
          {},
          formData
        );

        auth.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (err: any) {}
    }
  };

  return (
    <Fragment>
      <div className={classes["auth-container"]}>
        {isLoading && <LoadingSpinner isLoading={isLoading} />}
        {error && <ErrorModal onClose={clearError} errorText={error} />}
        <h2 className={classes["auth__title"]}>
          {isLoginMode ? "???????????????" : "????????????"}
        </h2>
        <form onSubmit={handleSubmit} className={classes["auth-form"]}>
          {!isLoginMode && (
            <Input
              id="name"
              type="text"
              placeholder="????????? ??????????????????."
              element="input"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              errorText={"????????? ????????? ??????????????????."}
            />
          )}
          {!isLoginMode && (
            <ImageUpload
              onInput={inputHandler}
              id="imageUrl"
              errorText={"????????? ????????? ???????????????."}
            />
          )}
          <Input
            id="email"
            type="text"
            placeholder="???????????? ??????????????????."
            element="input"
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText={"????????? ???????????? ??????????????????."}
          />
          <Input
            id="password"
            type="password"
            placeholder="??????????????? ??????????????????."
            element="input"
            validators={[VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
            errorText={"????????? ??????????????? ??????????????????."}
          />
          <div className={classes["btn-wrapper"]}>
            <button
              className={classes.btn}
              type="submit"
              disabled={!formState.isValid}
            >
              {isLoginMode ? "?????????" : "????????????"}
            </button>
          </div>
        </form>
        <div className={classes["btn-wrapper"]}>
          <button className={classes.btn} onClick={handleClickChangeMode}>
            {isLoginMode ? "??????????????????" : "?????????????????????"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
