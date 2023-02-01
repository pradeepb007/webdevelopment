import  React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {  EmailShareButton}  from "react-share";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SharePodcast(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const script = document.createElement('script');  
    script.src = "https://teams.microsoft.com/share/launcher.js";
    script.async = true;
    script.defer = true;  
    document.body.appendChild(script);  
    return () => {
      document.body.removeChild(script);
    }
  }, [props.song]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Share
      </Button>
      <Dialog
        open={open}
        maxWidth ="md"
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Share Podcast</DialogTitle>
        <DialogContent>
        <div
          className="teams-share-button"   
          id="teamsShare"      
          data-icon-px-size="64"
          data-msg-text={props.song.title}
          data-href={props.song.ShotClassUrl}
          >   
        </div>           

         <EmailShareButton
            url={props.song.ShotClassUrl}
            subject={props.song.title}
            body={props.song.title}
            className="email-share-button"
          >
           <MailOutlineIcon sx={{ fontSize: 64 }}/>
          </EmailShareButton>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}