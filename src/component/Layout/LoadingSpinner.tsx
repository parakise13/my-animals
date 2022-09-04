import { CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";
import "./LoadingSpinner.scss";

export interface LoadingProps {
  isLoading: boolean;
}

const override: CSSProperties = {
  display: "block",
  position: "absolute",
  top: "40%",
  left: "45%",
  margin: "0 auto",
  borderColor: "#91a8d0",
  zIndex: 9999,
};

const LoadingSpinner = (props: LoadingProps) => {
  return (
    <div className="sweet-loading">
      <PacmanLoader
        color={"#91a8d0"}
        loading={props.isLoading}
        cssOverride={override}
        size={60}
      />
    </div>
  );
};

export default LoadingSpinner;
