import { Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../shared/context/modal-context";
import classes from "./Modal.module.scss";

export interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

const BackDrop = () => { 
  const modal = useContext(ModalContext);
  const handleClickClose = () => {
    modal.closeModal();
  };

  return <div className={classes.Backdrop} onClick={handleClickClose}></div>;
};

const ModalOverlay = (props:ChildrenProps) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props:ChildrenProps) => {
  return (
		<Fragment>
			{ReactDOM.createPortal(<BackDrop />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay className={props.className}>{ props.children }</ModalOverlay>, portalElement)}
		</Fragment>
  );
};

export default Modal;
