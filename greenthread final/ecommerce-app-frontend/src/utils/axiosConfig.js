export const base_url = "http://localhost:5000/api/";
const userToken = localStorage.getItem("token");

export const config = {
  headers: {
    Authorization: `Bearer ${userToken?.length > 0 ? userToken : ""}`,
    Accept: "application/json",
  },
};