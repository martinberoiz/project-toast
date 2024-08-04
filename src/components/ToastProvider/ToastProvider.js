import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback(
    (variant, message) => {
      setToasts([
        ...toasts,
        { variant: variant, message: message, id: crypto.randomUUID() },
      ]);
    },
    [toasts]
  );

  const deleteToast = React.useCallback(
    (deleteId) => {
      const newToasts = toasts.filter(({ id }) => id != deleteId);
      setToasts(newToasts);
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ toasts, createToast, deleteToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
