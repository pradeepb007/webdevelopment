import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles"; 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(1),      
      minWidth :"350px",
      maxWidth : "350px",
      margin: "0px"
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
    "& .MuiDialogTitle-root": {
      background: "#2e7d32",
      color:"#fff"
    },
    "& .MuiDialog-paper":{
      margin: "0px"
    }
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;  
    return (
      <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 4,
              top: 4,
              color: "#fff",
              "&:hover": {
                background: (theme) => theme.palette.grey[300],
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  export { BootstrapDialog, BootstrapDialogTitle};