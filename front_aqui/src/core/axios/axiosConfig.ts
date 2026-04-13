import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.response.use(
  (response) => {
    if (typeof response.data === "object" && "message" in response.data) {
      toast(response.data["message"], {
        type: "success",
      });
    }
    return response;
  },
  (error) => {
    const message =
      error.response?.data?.message || "Error de conexión con el servidor";

    const errorMsg = {
      500: "Error en el servidor",
      400: "Revise la información antes de intentar de nuevo",
      default: "Hubo un erro ineesperado intente nuevamente",
    };

    const msg =
      errorMsg[error.status as 500 | 400 | "default"] ?? errorMsg.default;

    toast(msg, {
      type: "error",
    });
    console.error("Error detectado:", message);

    return Promise.reject(error);
  },
);

export default api;
