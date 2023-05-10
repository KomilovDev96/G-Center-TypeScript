import { Image } from "antd";
import Wrapper from "components/Wrapper";
import CardStyle from "./Style";
import SubTitle from "components/SubTitle";
import { Link } from "react-router-dom";
import Text from "components/Text";

type Props = {
  img: string;
  title: string;
  description: string;
  centerId: string;
};

function CenterCard({ img, title, description, centerId }: Props) {
  return (
    <CardStyle>
      <Link to={"/platform/" + centerId}>
        <Wrapper align="center">
          <Image className="card__img" src={img} alt={title} preview={false} />
          <div>
            <SubTitle>{title}</SubTitle>
            <Text>{description}</Text>
          </div>
        </Wrapper>
      </Link>
    </CardStyle>
  );
}

export default CenterCard;
