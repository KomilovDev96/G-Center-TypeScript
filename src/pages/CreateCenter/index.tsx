import { Form } from "antd";
import CustomButton from "components/Button";
import { CustomInput } from "components/Input";
import { CustomTextarea } from "components/Input/Textarea";
import SubTitle from "components/SubTitle";
import UploadImage, { IFile } from "components/UploadImage";
import Wrapper from "components/Wrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import t from "translate";
import Plans from "./Plans";
import StyleCreateCenter from "./Style";

function CreateCenter() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [selectedImg, setSelectedImg] = useState<IFile | null>(null);
  const navigate = useNavigate();
  
  const cancelHandler = () => {
    navigate("/centers");
  };
  const submitHandler = (data: { name: string; description: string }) => {
    const center = {
      ...data,
      selectedPlanId,
      selectedImg,
    };

    console.log(center);
    navigate("/centers");
  };

  const isCreateBtnDisabled =
    description && name && selectedPlanId ? false : true;

  return (
    <StyleCreateCenter>
      <Form layout="horizontal" onFinish={submitHandler}>
        <SubTitle className="center__title">{t("Create Center")}</SubTitle>
        <UploadImage
          onChange={(file) => {
            setSelectedImg(file);
          }}
        />
        <CustomInput
          label="Company name"
          name="name"
          onChange={setName}
          inputValue={name}
        />
        <CustomTextarea
          label="Discrption"
          name="description"
          inputValue={description}
          onChange={setDescription}
        />
        <Wrapper className="plans-wrapper" justify="space-between">
          <Plans onSelect={setSelectedPlanId} selectedPlanId={selectedPlanId} />
        </Wrapper>
        <Wrapper className="center__button-wrapper">
          <button
            className="center__button center__button--cancel"
            onClick={cancelHandler}
            type="button"
          >
            {t("Cancel")}
          </button>
          <CustomButton isDisabled={isCreateBtnDisabled} type="submit">
            {t("Create")}
          </CustomButton>
        </Wrapper>
      </Form>
    </StyleCreateCenter>
  );
}

export default CreateCenter;
