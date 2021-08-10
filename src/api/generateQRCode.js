import { request } from "../config/axios";

export const generateQRCode = async (data) => {
  return request.post("qr/v1/generate", data);
};
