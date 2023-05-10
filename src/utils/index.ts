import axios from "axios";

export function convertPxToRem(px: number): string {
  return px / 16 + "rem";
}

export async function fetchCountries() {
  const res = await axios.get("https://countriesnow.space/api/v0.1/countries");
  return res.data;
}
