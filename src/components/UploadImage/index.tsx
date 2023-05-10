import { Camera } from "assets/images";
import Wrapper from "components/Wrapper";
import { ChangeEvent, useRef, useState } from "react";
import StyledImage from "./Style";

export interface IFile {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

type Props = {
  imageUrl?: string;
  className?: string;
  onChange: (img: IFile) => void;
};

function UploadImage({ imageUrl, className, onChange }: Props) {
  const [imgUrl, setImgUrl] = useState<string>("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }

    setImgUrl(URL.createObjectURL(files[0]));
    onChange(files[0]);
  };

  return (
    <StyledImage className={className}>
      <Wrapper
        className={`img-wrapper ${!imgUrl ? "img-wrapper--active" : ""}`}
        align="center"
      >
        <img className="img" src={imgUrl} alt="" />
        <button
          className="img-btn"
          type="button"
          onClick={() => fileRef.current?.click()}
        >
          <Wrapper align="center" justify="center">
            <Camera />
          </Wrapper>
        </button>
      </Wrapper>
      <input
        className="img-input"
        type="file"
        ref={fileRef}
        onChange={changeHandler}
      />
    </StyledImage>
  );
}

export default UploadImage;
