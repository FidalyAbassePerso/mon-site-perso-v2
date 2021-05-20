import React from "react";
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import abasse from "./Images/AbasseLogo.png";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './Images/Css/Acceuil.css'
import VizSensor from 'react-visibility-sensor'; // or use any other 3rd party plugin or define your own
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';




const styles = {

    title: {
        background: "#fcd238",
        marginTop: 0
    },
    container: {
        width:"98.7vw",
        height:"100vh",
        background:"#fcd238",
        marginLeft: 0,
        flexGrow: 1,
        marginTop: "27vh"
    },
    content : {
        paddingTop: "28vh"
    }
};

class Contact extends React.Component {

    constructor(){
        super();
        this.state = {isVisible: false,isMobile : window.innerWidth > 1080 ? false : true};
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

    handleFade(isVisible) {
        this.setState({isVisible})
    }

    render() {
        var styleDiv = this.state.isMobile ? "aucunStyle" : "contact"
        return (
            <VizSensor //librairies permettant d'afficher le composant uniquement si sa position se trouve dans l'écran visible
                onChange={(isVisible) => {
                    this.handleFade(isVisible);
                }}
            >

                            <div id={styleDiv} className={this.props.classes.container}>
                                <div className={this.props.classes.content}>
                                    <center><h1 className={this.props.classes.title}>Contactez moi!</h1></center>
                                
                                        <Container>
                                            <Button href="mailto:fidalyabasse@gmail.com" variant="contained" color="primary">
                                                Me contacter
                                            </Button>
                                        </Container>

                                </div>
                                
                            </div>
                                    
            </VizSensor>
            
        )
    }
}

export default withStyles(styles)(Contact)

