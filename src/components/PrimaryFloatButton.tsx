import * as React from "react";
import { PrimaryFloatButtonProps } from "../types/PrimaryFloatButton";

export const PrimaryFloatButton: React.FC<PrimaryFloatButtonProps> = ({
  label,
  onClick
}) => {
  return (
    <p>
      <button onClick={onClick}>{label}</button>
    </p>
  );
};
