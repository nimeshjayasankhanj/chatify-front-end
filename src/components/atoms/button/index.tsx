import React from "react";
import { Button as MaterialButton, styled } from "@mui/material";
interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: number;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverBackground?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "text" | "outlined" | "contained";
  fontWeight?: "normal" | "bold" | "500" | "600" | "700" | "800" | "900";
  borderRadius?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  style,
  endIcon,
  startIcon,
  fontSize = 16,
  hoverBackground,
  backgroundColor,
  borderColor = "#fff",
  variant = "contained",
  textColor = "primary",
  borderRadius,
  onClick,
  type = "button",
  fullWidth = true,
}: ButtonProps) => {
  const CustomButton = styled(MaterialButton)({
    fontSize,
    borderColor,
    backgroundColor,
    color: textColor,

    borderRadius,
    textTransform: "unset",
    "&:hover": {
      backgroundColor: hoverBackground,
      borderColor: textColor,
    },
  });

  return (
    <CustomButton
      style={style}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </CustomButton>
  );
};
