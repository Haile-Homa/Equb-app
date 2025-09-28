import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  // 💡 Unified toast function
  const showToast = (message, type = "info") => {
    switch (type) {
      case "success":
        toast.success(message, { position: "top-right" });
        break;
      case "error":
        toast.error(message, { position: "top-right" });
        break;
      case "warning":
        toast.warning(message, { position: "top-right" });
        break;
      default:
        toast.info(message, { position: "top-right" });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* 🔥 Only ONE ToastContainer for the whole app */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);




