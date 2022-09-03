import { useContext } from "react";
import { ModalContext } from "../../shared/context/modal-context";
import Modal from "../Layout/Modal";
import "./Error.scss";

export interface ErrorProps {
	errorText: string;
	onClose: () => void;
}

const ErrorModal = (props:ErrorProps) => {
	const modal = useContext(ModalContext);
	
	const handleClickOk = () => {
		modal.closeModal();
		props.onClose();
	}
	
	return (
		<Modal className={"error-container"}>
			<div>
				{ props.errorText }
			</div>
			<button onClick={handleClickOk}>확인</button>
		</Modal>
	)
}

export default ErrorModal;