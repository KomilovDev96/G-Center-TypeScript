import { useLazyQuery } from "@apollo/client";
import { Form, Radio } from "antd";
import AuthWrapper from "components/AuthWrapper";
import CustomButton from "components/Button";
import { CustomInput } from "components/Input";
import CustomDatePicker from "components/Input/Datapicker";
import CustomPhoneInput from "components/Input/Phone";
import CustomSelect from "components/Input/Select";
import Loader from "components/Loader";
import Wrapper from "components/Wrapper";
import { GQL_SignUp } from "graphql/Query";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { slides } from "pages/signin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signin } from "store/reducer/AuthSlice";
import t from "translate";
import StyledSignup from "./Style";

interface IFormData {
  name: string;
  dateOfBirthday: string;
  country: string;
  city: string;
  phone: string;
  password: string;
  gender: string;
}

function Signup() {
  const [name, setName] = useState<string>("");
  const [dateOfBirthday, setDateOfBirthday] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [signUpQuery, { data, error, loading }] = useLazyQuery(GQL_SignUp);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { countries: countriesAndCities } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!loading && data) {
      dispatch(signin(data.signUp));
      navigate("/");
    }
  }, [data, loading, dispatch, navigate]);

  useEffect(() => {
    toast.error(error?.message);
  }, [error]);

  useEffect(() => {
    const selectedCountryCities = countriesAndCities.find(
      (item) => item.country === country
    );
    setCities(selectedCountryCities?.cities ?? []);
  }, [country, countriesAndCities]);

  const countries = countriesAndCities.map((country) => country.country);
  const isButtonDisabled = [
    gender,
    name,
    dateOfBirthday,
    country,
    city,
    phone,
    password,
  ].every(Boolean);

  const finishHandler = (data: IFormData) => {
    const { dateOfBirthday, ...user } = data;

    signUpQuery({
      variables: {
        ...user,
        phone,
        dateOfBirthday: dateOfBirthday.toString(),
      },
    });
  };

  return (
    <>
      {loading ? <Loader /> : ""}
      <AuthWrapper
        slides={slides}
        title="Sign Up"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, nam?"
        sublink="Sign In"
        subtext="Do you  have an account?"
        sublinkPath="/"
      >
        <StyledSignup>
          <Form onFinish={finishHandler}>
            <CustomInput
              name="name"
              inputValue={name}
              label="Full name"
              onChange={setName}
            />
            <CustomDatePicker
              name="dateOfBirthday"
              label="Date of birthday"
              inputValue={dateOfBirthday}
              onChange={setDateOfBirthday}
            />
            <Wrapper>
              <CustomSelect
                options={countries}
                label="Country"
                name="country"
                inputValue={country}
                onChange={setCountry}
              />
              <div className="signup__select">
                <CustomSelect
                  options={cities}
                  label="City"
                  name="city"
                  inputValue={city}
                  onChange={setCity}
                />
              </div>
            </Wrapper>
            <Form.Item
              className="gender-wrapper"
              name="gender"
              label={t("Gender")}
            >
              <Radio.Group
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <Radio value="male">{t("Male")}</Radio>
                <Radio value="female">{t("Female")}</Radio>
              </Radio.Group>
            </Form.Item>
            <CustomPhoneInput
              label="Phone"
              name="phone"
              onChange={setPhone}
              inputValue={phone}
              type="phone"
            />
            <CustomInput
              label="Password"
              name="password"
              onChange={setPassword}
              inputValue={password}
              type="password"
            />
            <CustomButton isDisabled={!isButtonDisabled}>
              {t("Sign up")}
            </CustomButton>
          </Form>
        </StyledSignup>
      </AuthWrapper>
    </>
  );
}

export default Signup;
