import React from "react";

function VariantChoice({ value, name, variant, setVariant }) {
  const v_id = React.useId();
  return (
    <label htmlFor={v_id}>
      <input
        id={v_id}
        type="radio"
        name={name}
        value={value}
        checked={variant == value}
        onChange={(event) => {
          setVariant(event.target.value);
        }}
      />
      {value}
    </label>
  );
}

export default React.memo(VariantChoice);
