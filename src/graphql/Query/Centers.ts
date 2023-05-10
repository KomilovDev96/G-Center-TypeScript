import { gql } from "@apollo/client";

export const GQL_GETPLANS = gql`
  query {
    getPlans {
      payload {
        _id
        title
        price
        limits {
          teachers
          groups
          students
        }
      }
    }
  }
`;
