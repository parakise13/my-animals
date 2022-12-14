import { Fragment, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../shared/context/auth-context";
import useForm from "../../shared/hooks/form-hook";
import useHttpReq from "../../shared/hooks/http-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import ImageUpload from "../Layout/ImageUpload";
import Input from "../Layout/Input";
import LoadingSpinner from "../Layout/LoadingSpinner";

import classes from "./AddAnimal.module.scss";
import ErrorModal from "./ErrorModal";

const AddAnimal = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpReq();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm(
    {
      animalName: {
        value: "",
        isValid: false,
      },
      species: {
        value: "",
        isValid: false,
      },
      age: {
        value: "",
        isValid: false,
      },
      description: {
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

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const formData = new FormData();
      formData.append("animalName", formState.inputs.animalName.value);
      formData.append("species", formState.inputs.species.value);
      formData.append("age", formState.inputs.age.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("imageUrl", formState.inputs.imageUrl.value);
      if (auth.userId) {
        formData.append("creator", auth.userId);
      }

      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/animals`,
        "POST",
        {Authorization: `Bearer ${auth.token}`},
        formData
      );
      console.log(responseData);

      navigate(`/${auth.userId}/animals`);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      {isLoading && <LoadingSpinner isLoading={isLoading} />}
      {error && <ErrorModal onClose={clearError} errorText={error} />}
      <div className={classes["new-animal"]}>
        <h2>ADD NEW TODO</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes["new-animal__detail"]}>
            <div>
              <label htmlFor="animalName">?????? : </label>
              <Input
                id="animalName"
                type="text"
                placeholder="????????? ??????????????????."
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                errorText={"????????? ????????? ??????????????????."}
              />
            </div>
            <div>
              <label htmlFor="species">?????? : </label>
              <Input
                id="species"
                type="text"
                placeholder="????????? ??????????????????."
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                errorText={"????????? ????????? ??????????????????."}
              />
            </div>
            <div>
              <label htmlFor="age">?????? : </label>
              <Input
                id="age"
                type="number"
                placeholder="????????? ??????????????????."
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                errorText={"????????? ????????? ??????????????????."}
              />
            </div>
          </div>
          <div className={classes["image-input"]}>
            <ImageUpload
              onInput={inputHandler}
              id="imageUrl"
              errorText={"????????? ????????? ???????????????."}
            />
          </div>
          <div className={classes["new-animal__desc"]}>
            <label htmlFor="description">?????? : </label>
            <Input
              id="description"
              placeholder="????????? ??????????????????."
              element="textarea"
              validators={[VALIDATOR_MINLENGTH(5)]}
              rows={5}
              onInput={inputHandler}
              errorText={"????????? 5?????? ?????? ??????????????????."}
            />
          </div>
          <div className={classes["new-animal__btn"]}>
            <button type="submit" disabled={!formState.isValid}>
              ????????????
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddAnimal;
