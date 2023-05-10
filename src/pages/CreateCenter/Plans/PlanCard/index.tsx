import t from "translate";
import Card from "./Style";

type Props = {
  title: string;
  limits: { [key: string]: number };
  price: number;
  selectedPlanId: string;
  planId: string;
  onClick: (planId: string) => void;
};

function PlanCard(props: Props) {
  const { title, limits, price, selectedPlanId, onClick, planId } = props;
  const clickHandler = () => onClick(planId);
  return (
    <Card>
      <h2 className="card__title">{title}</h2>
      {Object.entries(limits).map((limit) => (
        <p className="card__text" key={limit[0]}>
          {t(limit[0])}: {limit[1]}
        </p>
      ))}
      <p className="card__price">
        {t("Price")}: {price}
      </p>
      <button
        className={`card__btn ${
          selectedPlanId === planId && "card__btn--active"
        }`}
        onClick={clickHandler}
        type="button"
      >
        {t("Choose")}
      </button>
    </Card>
  );
}

export default PlanCard;
