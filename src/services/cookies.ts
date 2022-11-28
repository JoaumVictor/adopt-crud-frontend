import api from "./api";

export const getCookies = async () => {
  const { data } = await api.get("/challenge/get-cookies");
  return data;
};
