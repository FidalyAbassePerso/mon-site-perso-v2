import React from "react";
import { Grid, withStyles } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ImagesDreamVeloper from './Images/Capture_Site_ATSN.PNG'
import ImagesBloopy from './Images/Capture_Bloopy.PNG'
import ImagesPortfolio from './Images/Capture_portfolio.PNG'


const styles = {
    bloc: {
        marginLeft: "6vw",
        marginTop: "2vw"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    buttons: {
      marginLeft: "7vw"
    }
}

class MesProjets extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isMobile : window.innerWidth > 1080 ? false : true};
      document.title = "Abasse FIDALY"
  
    }

    updateComponentSize = () => {
        let isMobile = this.state.isMobile;
        if (window.innerWidth > 1080 ) {
            isMobile = false
        }
        else{
            isMobile = true;
        }
        this.setState({isMobile});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateComponentSize);
    }
  
    render() {
      
      var tailleGrid = this.state.isMobile ? 12 : 3
      return (
        <div className={this.props.classes.root}>
            <h1 className={this.props.classes.title}>Mes projets</h1>
            <Grid container>
                <Grid item xs={tailleGrid} className={this.props.classes.bloc}>
                    <Card className={this.props.classes.root}>
                        <CardHeader
                            title="Mon site portfolio"
                        />
                        <CardMedia
                            className={this.props.classes.media}
                            image={ImagesPortfolio}
                            title="Site portfolio"
                        />
                        <CardActions className={this.props.classes.buttons}>
                            <IconButton aria-label="Consulter sur GitHub">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton aria-label="Visiter le site">
                                <PublicIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={tailleGrid} className={this.props.classes.bloc}>
                    <Card className={this.props.classes.root}>
                        <CardHeader
                            title="Site web dreamveloper"
                        />
                        <CardMedia
                            className={this.props.classes.media}
                            image={ImagesDreamVeloper}
                            title="Site dreamveloper"
                        />
                        <CardActions className={this.props.classes.buttons}>
                            <IconButton href="https://github.com/FidalyAbassePerso/site-dreamveloper" aria-label="Consulter sur GitHub">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton href="https://dreamveloper-studio.com/" aria-label="Visiter le site">
                                <PublicIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={tailleGrid} className={this.props.classes.bloc}>
                    <Card className={this.props.classes.root}>
                        <CardHeader
                            title="Site web Bloopy & Droopy"
                        />
                        <CardMedia
                            className={this.props.classes.media}
                            image={ImagesBloopy}
                            title="Site bloopy & droopy"
                        />
                        <CardActions className={this.props.classes.buttons}>
                            <IconButton href="https://github.com/FidalyAbassePerso/site-bloopy" aria-label="Consulter sur GitHub">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton href="https://dreamveloper-studio.com/Site%20Bloopy/index.html" aria-label="Visiter le site">
                                <PublicIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
      );
    }
    
  }
  
  export default withStyles(styles)(MesProjets);