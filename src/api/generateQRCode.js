import axios from "axios";

export const generateQRCode = async (data) => {
  try {
    return await axios.post("http://localhost:4000/qr/generate", {
      ...data,
    });
  } catch (error) {
    return error;
  }
};
