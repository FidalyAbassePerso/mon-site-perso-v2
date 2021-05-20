import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';
import Acceuil from './Acceuil';
import React from "react";
import Grid from '@material-ui/core/Grid';
import { Paper, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MesProjets from './MesProjets';
import Contact from './Contact';


const styles = {
  root : {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
  },
}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    document.title = "Abasse FIDALY"

  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container>
            <Grid item xs={12}>
              <Acceuil />
            </Grid>
            <Grid item xs={12}>
              <div className={this.props.classes.paper} >
                <AboutMe />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={this.props.classes.paper}>
                <MesProjets />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={this.props.classes.paper}>
                <Contact />
              </div>
            </Grid>
        </Grid>
        
      </div>
    );
  }
  
}

export default withStyles(styles)(App);
