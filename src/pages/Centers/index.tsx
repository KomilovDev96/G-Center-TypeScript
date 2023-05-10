import { Tabs } from "antd";
import SearchForm from "components/Search";
import Wrapper from "components/Wrapper";
import { Link } from "react-router-dom";
import t from "translate";
import CenterCard from "./card";
import StyledCenters from "./Style";
const { TabPane } = Tabs;

interface ICenter {
  title: string;
  description: string;
  img: string;
  centerId: string;
}

const centers: ICenter[] = [
  {
    title: "Amazon",
    description: "Lets check the words gegergerfd",
    img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
    centerId: "1",
  },
];

function Centers() {
  return (
    <StyledCenters>
      <Tabs tabPosition="left" defaultActiveKey="1">
        <TabPane tab={t("All Centers")} key={1}>
          <Wrapper  className="tab__header" justify="space-between" align="center">
            <SearchForm />
            <Link className="tab__btn" to="/create-center">
              {t("Create")}
            </Link>
          </Wrapper>
          <div className="tab__body">
            {centers.map(({ title, description, img, centerId }) => (
              <CenterCard
                title={title}
                description={description}
                img={img}
                centerId={centerId}
                key={centerId}
              />
            ))}
          </div>
        </TabPane>
        <TabPane tab={t("My Centers")} key={2}>
          <Wrapper
            className="tab__header"
            justify="space-between"
            align="center"
          >
            <SearchForm />
            <Link className="tab__btn" to="/create-center">
              {t("Create")}
            </Link>
          </Wrapper>
          <div className="tab__body">
            {centers.map(({ title, description, img, centerId }) => (
              <CenterCard
                title={title}
                description={description}
                img={img}
                centerId={centerId}
                key={centerId}
              />
            ))}
          </div>
        </TabPane>
      </Tabs>
    </StyledCenters>
  );
}

export default Centers;
