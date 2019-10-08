import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function WriteUpDialog(props) {
  const { handleClose, open, projectData } = props;
  console.log(projectData)
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">{projectData.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <h4>INTRO:</h4>
          {projectData.intro}
        </DialogContentText>
        <DialogContentText>
          <h4>WHY:</h4>
          {projectData.why}
        </DialogContentText>
        <DialogContentText>
          <h4>Challenges:</h4>
          {projectData.challenges.challengeOne.challenge}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>


  )
}
