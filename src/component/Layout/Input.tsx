import { useEffect, useState } from "react";
import { validate, ValidatorProps } from "../../shared/util/validators";
import "./Input.scss";

export interface InputProps {
  id: string;
  validators: ValidatorProps[];
  type?: string;
  placeholder?: string;
  element: string;
  rows?: number;
  initialValue?: string | number;
  initialValid?: boolean;
  errorText: string;
}

interface InputChangeProps extends InputProps {
  onInput: (id: string, value: string | number, isValid: boolean) => void;
}

const Input = (props: InputChangeProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState(props.initialValue || "");
  const [isValid, setIsValid] = useState(props.initialValid || false);

  const { id, onInput } = props;

  // input value sharing
  useEffect(() => {
    props.onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const handleChange = (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(evt.target.value);
    setIsValid(validate(evt.target.value, props.validators));
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <div
      className={`form-control ${
        !isValid && isTouched && "form-control__invalid"
      }`}
    >
      {props.element === "input" ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      ) : (
        <textarea
          rows={props.rows || 5}
          id={props.id}
          placeholder={props.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      )}
      {!isValid && isTouched && (
        <p className="error-text">* {props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
