import * as React from "react";
import { PrimaryFloatButtonProps } from "../types/PrimaryFloatButton";

export const PrimaryFloatButton: React.FC<PrimaryFloatButtonProps> = ({
  label,
  isDisplay,
  onClick
}) => {
  const classes = "primary-button-area" + (isDisplay ? " show" : "");
  return (
    <div className={classes}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};
