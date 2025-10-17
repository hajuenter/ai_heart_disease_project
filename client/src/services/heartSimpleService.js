import api from "./api";

export const predictHeartDiseaseSimple = async (payload) => {
  const cleanPayload = { ...payload };
  Object.keys(cleanPayload).forEach((k) => {
    if (cleanPayload[k] !== "") cleanPayload[k] = Number(cleanPayload[k]);
  });

  const res = await api.post("/predict/simple", cleanPayload);
  return res.data;
};
