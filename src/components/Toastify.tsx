import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customToastStyle: React.CSSProperties = {
  position: "fixed",
  top: "1rem",
  right: "1rem",
  minWidth: "315px",
  backgroundColor: "#fff", 
  color: "#333", 
  borderRadius: "0.5rem",
  padding: "0.75rem 1.25rem",
  fontSize: "0.875rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export const showErrorToast = (message: string) => {
  const toastOptions: ToastOptions = {
    style: customToastStyle,
    minWidth: "250px",
    position: "top-right", 
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light", 
  };

  toast.error(message, toastOptions);
};

const Toastify = () => {
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Toastify;
