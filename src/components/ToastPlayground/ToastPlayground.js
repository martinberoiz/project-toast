import React from "react";

import Button from "../Button";
import VariantChoice from "../VariantChoice";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const textRef = React.useRef();

  React.useEffect(() => {
    // Focus the slider on mount:
    textRef.current?.focus();
  }, []);

  const { createToast } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (message === "") {
            return;
          }
          createToast(variant, message);
          setMessage("");
          textRef.current.focus();
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="message"
                ref={textRef}
                className={styles.messageInput}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                value={message}
                type="text"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((varName) => {
                return (
                  <VariantChoice
                    name={"variantGroup"}
                    value={varName}
                    key={varName}
                    variant={variant}
                    setVariant={setVariant}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
