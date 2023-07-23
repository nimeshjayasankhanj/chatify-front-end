import { Card as CardComponent, CardContent } from "@mui/material";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <CardComponent>
      <CardContent>{children}</CardContent>
    </CardComponent>
  );
};
