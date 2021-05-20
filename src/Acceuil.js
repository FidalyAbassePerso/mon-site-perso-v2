import React from "react";
import { withStyles } from '@material-ui/core';
import background from './Images/ATSN.jpg'
import Paper from '@material-ui/core/Paper';
import abasse from "./Images/AbasseLogo.png";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './Images/Css/Acceuil.css'
import Fade from '@material-ui/core/Grow';



const styles = {
    acceuil: {
        //backgroundImage: `url(${background})`,
        width: "98vw",
        height: "100vh"
    },
    title: {
        marginTop: "45vh",
    }
};

class Acceuil extends React.Component {

    constructor(){
        super();
        this.state = {styleTitre : window.innerWidth <= 1140 ? "aucunStyle" : "titreAcceuil"};
    }

    updateComponentSize = () => {
        let styleTitre = this.state.styleTitre;
        if (window.innerWidth > 1140 ) {
            styleTitre = "titreAcceuil"
        }
        else{
            styleTitre = "aucunStyle";
        }
        this.setState({styleTitre});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateComponentSize);
    }

    render() {
        
        return (
            <div id={this.state.styleTitre} className={this.props.classes.acceuil}>
                <Fade in={true}>
                    <center><h1 className={this.props.classes.title}>Bonjour, je m'appelle Abasse FIDALY, je suis développeur.</h1></center>
                </Fade>
            </div>
            
            
        )
    }
}

export default withStyles(styles)(Acceuil)

