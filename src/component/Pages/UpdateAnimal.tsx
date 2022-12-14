import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import useForm from "../../shared/hooks/form-hook";
import useHttpReq from "../../shared/hooks/http-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../Layout/Input";
import LoadingSpinner from "../Layout/LoadingSpinner";
import ErrorModal from "./ErrorModal";

import classes from "./UpdateAnimal.module.scss";
import { AnimalProps } from "./UserAnimalList";

const UpdateAnimal = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpReq();
  const animalId = useParams().animalId;
  const [loadedAnimal, setLoadedAnimal] = useState<AnimalProps>();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      animalName: {
        value: "",
        isValid: true,
      },
      species: {
        value: "",
        isValid: true,
      },
      age: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
    },
    true
  );

  useEffect(() => {
    const getAnimal = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/animals/${animalId}`
        );
        setLoadedAnimal(responseData.animal);

        setFormData(
          {
            animalName: {
              value: responseData.animal.animalName,
              isValid: true,
            },
            species: {
              value: responseData.animal.species,
              isValid: true,
            },
            age: {
              value: responseData.animal.age,
              isValid: true,
            },
            description: {
              value: responseData.animal.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err: any) {}
    };

    getAnimal();
  }, [setFormData, animalId, sendRequest]);

  const handleSubmitUpdate = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/animals/${animalId}`,
        "PATCH",
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        JSON.stringify({
          animalName: formState.inputs.animalName.value,
          species: formState.inputs.species.value,
          age: formState.inputs.age.value,
          description: formState.inputs.description.value,
        })
      );

      navigate(-1);
    } catch (err: any) {}
  };

  if (isLoading) {
    return (
      <div className={classes["loading"]}>
        {isLoading && <LoadingSpinner isLoading={isLoading} />}
      </div>
    );
  }

  if (!loadedAnimal && !error) {
    return (
      <div className={classes["not-found"]}>
        <h2>??????????????? ?????? ??? ????????????.</h2>
      </div>
    );
  }

  return (
    <Fragment>
      {error && <ErrorModal onClose={clearError} errorText={error} />}
      {!isLoading && loadedAnimal && (
        <form onSubmit={handleSubmitUpdate} className={classes["animal-list"]}>
          {loadedAnimal && (
            <div>
              <div className={classes["animal-list__detail"]}>
                <div>
                  <label htmlFor="animalName">?????? : </label>
                  <Input
                    id="animalName"
                    type="text"
                    element="input"
                    placeholder="????????? ??????????????????."
                    validators={[VALIDATOR_REQUIRE()]}
                    initialValue={loadedAnimal.animalName}
                    initialValid={true}
                    onInput={inputHandler}
                    errorText={"????????? ????????? ??????????????????."}
                  />
                </div>
                <div>
                  <label htmlFor="species">?????? : </label>
                  <Input
                    id="species"
                    type="text"
                    element="input"
                    placeholder="????????? ??????????????????."
                    validators={[VALIDATOR_REQUIRE()]}
                    initialValue={loadedAnimal.species}
                    initialValid={true}
                    onInput={inputHandler}
                    errorText={"????????? ????????? ??????????????????."}
                  />
                </div>
                <div>
                  <label htmlFor="age">?????? : </label>
                  <Input
                    id="age"
                    type="text"
                    element="input"
                    placeholder="????????? ??????????????????."
                    validators={[VALIDATOR_REQUIRE()]}
                    initialValue={loadedAnimal.age}
                    initialValid={true}
                    onInput={inputHandler}
                    errorText={"????????? ????????? ??????????????????."}
                  />
                </div>
              </div>
              <div className={classes["update-animal__desc"]}>
                <label htmlFor="description">?????? : </label>
                <Input
                  id="description"
                  placeholder="????????? ??????????????????."
                  element="textarea"
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  initialValue={loadedAnimal.description}
                  initialValid={true}
                  rows={5}
                  onInput={inputHandler}
                  errorText={"????????? 5?????? ?????? ??????????????????."}
                />
              </div>
            </div>
          )}
          <button
            className={classes["animal-list__btns"]}
            type="submit"
            disabled={!formState.isValid}
          >
            ????????????
          </button>
        </form>
      )}
    </Fragment>
  );
};

export default UpdateAnimal;
