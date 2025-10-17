import api from "./api";

export const predictHeartDisease = async (payload) => {
  const cleanPayload = { ...payload };
  Object.keys(cleanPayload).forEach((k) => {
    if (cleanPayload[k] !== "") cleanPayload[k] = Number(cleanPayload[k]);
  });

  const res = await api.post("/predict/full", cleanPayload);
  return res.data;
};
