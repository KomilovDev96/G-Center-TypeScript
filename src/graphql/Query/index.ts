import { gql } from "@apollo/client";

export const GQL_SignIn = gql`
  query signIn($phone: String!, $password: String!) {
    signIn(user: { phone: $phone, password: $password }) {
      token
      user {
        _id
        image
        phone
      }
    }
  }
`;

export const GQL_SignUp = gql`
  query signUp(
    $name: String
    $city: String
    $country: String
    $dateOfBirthday: String
    $gender: String!
    $phone: String!
    $password: String!
  ) {
    signUp(
      user: {
        name: $name
        city: $city
        country: $country
        dateOfBirthday: $dateOfBirthday
        gender: $gender
        phone: $phone
        password: $password
      }
    ) {
      token
      user {
        _id
        name
        phone
      }
    }
  }
`;
