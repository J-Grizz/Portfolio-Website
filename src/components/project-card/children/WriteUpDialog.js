import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  logCont: {
    "& h4": {
      marginBottom: 10,
      textTransform: "uppercase"
    }
  }
})

export default function WriteUpDialog(props) {
  const { handleClose, open, projectData } = props;
  const classes = useStyles();
  const skills = projectData.skills.map((each, i) => <DialogContentText key={i}>-{each}</DialogContentText>);

  const technologies = projectData.technologies.map((each, i) => <DialogContentText key={i}>-{each}</DialogContentText>);

  const challenges = projectData.challenges.map((each, i) =>
    <div key={i}>
      <DialogContentText>Challenge {i + 1}: {each.challenge}</DialogContentText>
      <DialogContentText>Solution: {each.solution}</DialogContentText>
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
      <DialogContent className={classes.logCont}>
        <h4>INTRO</h4>
        <DialogContentText>
          {projectData.intro}
        </DialogContentText>
        <h4>WHY</h4>
        <DialogContentText>
          {projectData.why}
        </DialogContentText>
        <h4>Challenges</h4>
        {challenges}
        <h4>Technolgies Used</h4>
        {technologies}
        <h4>Skills Used</h4>
        {skills}
        <h4>Conclusion</h4>
        <DialogContentText>
          {projectData.conclusion}
        </DialogContentText>
        <h4>Checkout the repo</h4>
        <DialogContentText>
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
