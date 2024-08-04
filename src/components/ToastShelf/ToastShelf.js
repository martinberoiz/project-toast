import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, deleteToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message, id }) => {
        function deleteThis() {
          console.log("Deleting " + id);
          deleteToast(id);
        }
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} deleteThis={deleteThis}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
