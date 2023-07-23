import React from "react";
import { Box, IconButton, Modal as MaterialModal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
}

export const Modal = ({ open, children, handleClose }: ModalProps) => {
  return (
    <MaterialModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box position="absolute" top="5px" right="5px">
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon cursor="pointer" />
          </IconButton>
        </Box>
        {children}
      </Box>
    </MaterialModal>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
