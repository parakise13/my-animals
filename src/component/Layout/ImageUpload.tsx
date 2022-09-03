import { useEffect, useRef, useState } from "react";
import "./ImageUpload.scss";

export interface ImageUploadProps {
  id: string;
  onInput: (id: string, pickedFile?: File, isValid?: boolean) => void;
  errorText: string;
}

const ImageUpload = (props: ImageUploadProps) => {
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<any>();

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const handlePickedImg = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (evt.target.files && evt.target.files.length === 1) {
      pickedFile = evt.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const handleClickPickImg = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        type="file"
        accept=".jpg,.png,.jpeg"
        name="profile-img"
        onChange={handlePickedImg}
        style={{ display: "none" }}
      />
      <div className={`image-upload`}>
        <div className={`image-upload__preview`}>
          {previewUrl && <img src={previewUrl.toString()} alt="preview" />}
          {!previewUrl && <p>사진을 선택해주세요.</p>}
        </div>
        <button type="button" onClick={handleClickPickImg}>
          사진 선택
        </button>
      </div>
      {!isValid && `* ${props.errorText}`}
    </div>
  );
};

export default ImageUpload;
