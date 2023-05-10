import SigninStyle from "./Style";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import AuthWrapper, { TSlide } from "components/AuthWrapper";
import t from "translate";
import { Form } from "antd";
import { CustomInput } from "components/Input";
import Wrapper from "components/Wrapper";
import { Link } from "react-router-dom";
import { GQL_SignIn } from "graphql/Query";
import { toast } from "react-toastify";
import Loader from "components/Loader";
import { signin } from "store/reducer/AuthSlice";
import { useAppDispatch } from "hooks/redux";
import CustomButton from "components/Button";
import CustomPhoneInput from "components/Input/Phone";

export const slides: TSlide[] = [
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2020/05/18/19/02/watercolour-flowers-5188030_960_720.png",
    title: "Heeeeeeee",
    text: "The best of the best of the best!",
  },
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2020/05/18/19/02/watercolour-flowers-5188030_960_720.png",
    title: "Heeeeeeee",
    text: "The best of the best of the best!",
  },
  {
    id: "3",
    image:
      "https://cdn.pixabay.com/photo/2020/05/18/19/02/watercolour-flowers-5188030_960_720.png",
    title: "Heeeeeeee",
    text: "The best of the best of the best!",
  },
];

type TFormProps = {
  phone: string;
  password: string;
};

function Signin() {
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [signIn, { loading, data, error }] = useLazyQuery(GQL_SignIn);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!loading && data) {
      dispatch(signin(data.signIn));
    }
  }, [loading, data, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const finishHandler = ({ password }: TFormProps) => {
    console.log(password)
    if (password && phoneValue) {
      signIn({
        variables: {
          phone: phoneValue,
          password,
        },
      });
    }
  };

  const isButtonDisabled = phoneValue && passwordValue ? false : true;

  useEffect(() => { }, [dispatch]);

  return (
    <AuthWrapper
      slides={slides}
      sublink="Sign Up"
      sublinkPath="/signup"
      subtext="You don't have account yet?"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, nam?"
      title="Hello again"
    >
      {loading ? <Loader /> : <></>}
      <SigninStyle>
        <Form onFinish={finishHandler}>
          <CustomPhoneInput
            name="phone"
            label="Phone"
            onChange={setPhoneValue}
            inputValue={phoneValue}
          />
          <CustomInput
            name="password"
            label="Password"
            type="password"
            onChange={setPasswordValue}
            inputValue={passwordValue}
          />
          <Wrapper className="signin__forgot-pass-wrapper" justify="flex-end">
            <Link to="/forgot-password">{t("Forgot password?")}</Link>
          </Wrapper>
          <CustomButton isDisabled={isButtonDisabled}>
            {t("Signin")}
          </CustomButton>
        </Form>
      </SigninStyle>
    </AuthWrapper>
  );
}

export default Signin;
