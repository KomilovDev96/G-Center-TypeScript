import AuthWrapperStyle from "./Style";
import Slider from "react-slick";
import Wrapper from "components/Wrapper";
import { Link } from "react-router-dom";
import { Logo } from "assets/images";
import SubTitle from "components/SubTitle";
import t from "translate";
import Text from "components/Text";

export type TSlide = {
  id: string;
  image: string;
  title: string;
  text: string;
};

type Props = {
  slides: TSlide[];
  children: JSX.Element | JSX.Element[];
  title?: string;
  text?: string;
  subtext?: string;
  sublink?: string;
  sublinkPath?: string;
};

const slickProps = {
  autoplay: true,
  arrows: false,
  dots: true,
};

const AuthWrapper = (props: Props) => {
  const {
    slides,
    children,
    title = "",
    text = "",
    subtext = "",
    sublink = "",
    sublinkPath = "",
  } = props;
  return (
    <AuthWrapperStyle>
      <Wrapper className="wrapper">
        <div className="auth-wrapper__block auth-wrapper__slider-side">
          <Slider {...slickProps}>
            {slides.map((slide) => (
              <div className="slide" key={slide.id}>
                <img
                  className="slide__img"
                  src={slide.image}
                  alt={slide.title}
                />
                <div className="slide__body">
                  <h6 className="slide__title">{slide.title}</h6>
                  <p className="slide__text">{slide.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="auth-wrapper__block">
          <Wrapper
            className="wrapper"
            direction="column"
            justify="space-between"
            align="center"
          >
            <div></div>
            <div>
              <Link className="logo-link" to="/">
                <Logo className="auth__logo" />
              </Link>
              <SubTitle className="auth__title">{t(title)}</SubTitle>
              {text && <Text className="auth__text">{t(text)}</Text>}
              {children}
            </div>
            <Wrapper className="auth__text-bottom">
              <Text className="auth__text">{t(subtext)}</Text>
              <Link className="auth__sign-up-link" to={sublinkPath}>
                {t(sublink)}
              </Link>
            </Wrapper>
          </Wrapper>
        </div>
      </Wrapper>
    </AuthWrapperStyle>
  );
};

export default AuthWrapper;
