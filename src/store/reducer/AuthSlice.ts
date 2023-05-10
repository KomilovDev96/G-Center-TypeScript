import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  phone: string;
  image?: string;
  _id: string;
}

interface ICountry {
  country: string;
  iso2: string;
  iso3: string;
  cities: string[];
}

interface IState {
  token: string;
  user: IUser | null;
  countries: ICountry[];
}

const initialState: IState = {
  token: "",
  user: null,
  countries: [],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state: IState, action) {
      state.token = action.payload?.token;
      state.user = action.payload.user;
    },
    signout(state) {
      state.token = "";
      state.user = null;
    },
    putCountries(state, action) {
      state.countries = action.payload;
    },
  },
});

export default auth.reducer;

export const { signin, signout, putCountries } = auth.actions;
