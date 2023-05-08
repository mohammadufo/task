import { Chip } from "@mui/material";
import React from "react";

const Badge = ({ status }) => {
  return (
    <Chip
      className="badge"
      label={status}
      color={
        status === "Alive" ? "success" : status === "Dead" ? "error" : "default"
      }
    />
  );
};

export default Badge;
