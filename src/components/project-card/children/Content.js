import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export default function Content(props) {
  const { projectData } = props;

  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {projectData.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">

      </Typography>
    </CardContent>
  )
}
