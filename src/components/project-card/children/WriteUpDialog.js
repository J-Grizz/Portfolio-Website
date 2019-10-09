import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function WriteUpDialog(props) {
  const { handleClose, open, projectData } = props;
  const skills = projectData.skills.map(each => <p>-{each}</p>);
  const technologies = projectData.technologies.map(each => <p>-{each}</p>);
  const challenges = projectData.challenges.map((each, i) =>
    <div>
      <p>Challenge {i + 1}: {each.challenge}</p>
      <p>Solution: {each.solution}</p>
    </div>

  );
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
          {challenges}
        </DialogContentText>
        <DialogContentText>
          <h4>Technolgies Used:</h4>
          {technologies}
        </DialogContentText>
        <DialogContentText>
          <h4>Skills Used:</h4>
          {skills}
        </DialogContentText>
        <DialogContentText>
          <h4>Conclusion:</h4>
          {projectData.conclusion}
        </DialogContentText>
        <DialogContentText>
          <h4>Checkout the repo:</h4>
          <a target="_blank" rel="noopener noreferrer" href={projectData.gitHub}>{projectData.name} Repo</a>
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
