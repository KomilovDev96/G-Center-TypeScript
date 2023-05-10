import { useQuery } from "@apollo/client";
import Wrapper from "components/Wrapper";
import { GQL_GETPLANS } from "graphql/Query/Centers";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PlanCard from "./PlanCard";
import StyledPlans from "./Style";

type Props = { onSelect: (planId: string) => void; selectedPlanId: string };

interface IPlan {
  _id: string;
  title: string;
  limits: { [key: string]: number };
  price: number;
}

function Plans({ onSelect, selectedPlanId }: Props) {
  const [plans, setPlans] = useState<IPlan[]>([]);
  const { data, loading, error } = useQuery(GQL_GETPLANS);

  useEffect(() => {
    if (!loading && data) {
      setPlans(data.getPlans.payload);
    }
  }, [data, loading]);

  useEffect(() => {
    toast.error(error?.message);
  }, [error]);

  return (
    <StyledPlans>
      <Wrapper className="plans-wrapper">
        {plans.map(({ _id, limits, price, title }) => {
          const { __typename, ...limitsWithoutTypename } = limits;
          return (
            <PlanCard
              limits={limitsWithoutTypename}
              onClick={onSelect}
              planId={_id}
              selectedPlanId={selectedPlanId}
              title={title}
              price={price}
              key={_id}
            />
          );
        })}
      </Wrapper>
    </StyledPlans>
  );
}

export default Plans;
