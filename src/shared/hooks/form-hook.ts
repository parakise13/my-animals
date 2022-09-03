import { useCallback, useReducer, useState } from "react";

interface StateProps {
    inputs: InputsProps[];
    isValid: boolean;
    [inputId: string]: any;
}

interface InputsProps {
    value: string | number;
    isValid: boolean;
}

interface actionTypeProps {
    type: string;
    isValid: boolean;
    value: string | number;
    inputId: string;
    inputs?: any;
    formIsValid?: boolean;
}

const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId]) {
                    continue;
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };
        case "SET_DATA":
            return {
                inputs: action.inputs,
                isValid: action.formIsValid,
            };
        default:
            return state;
    }
};

const useForm = (initialinputs: any, initialFormValidity: boolean) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialinputs,
        isValid: initialFormValidity,
    });

    const inputHandler = useCallback(
        (id: string, value: string | number, isValid: boolean) => {
            dispatch({
                type: "INPUT_CHANGE",
                value: value,
                isValid: isValid,
                inputId: id,
            });
        },
        []
    );

    // initial value가 있는경우 data 배치
    const setFormData = useCallback((inputData: any, formValidity: boolean) => {
        dispatch({
            type: "SET_DATA",
            inputs: inputData,
            formIsValid: formValidity,
        });
    }, []);

    return [formState, inputHandler, setFormData];
};

export default useForm;
