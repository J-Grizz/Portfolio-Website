import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../../components/navbar/Navbar"

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  viewer: {
    margin: "100px 0 30px 0",
    width: "44%"
  }
})

export default function FullCV() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <embed className={classes.viewer} src="https://res.cloudinary.com/dufbyqbkk/image/upload/v1570584316/Portfolio/images/James%27%20CV.pdf"
        type="application/pdf"></embed>
    </div>
  )
}
