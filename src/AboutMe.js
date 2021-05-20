import React from "react";
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import abasse from "./Images/AbasseLogo.png";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './Images/Css/Acceuil.css'
import VizSensor from 'react-visibility-sensor'; // or use any other 3rd party plugin or define your own
import Fade from '@material-ui/core/Fade';



const styles = {
    paper: {
        //backgroundImage: `url(${background})`,
        paddingTop: "1vh",
        paddingLeft: "15vw",
        width: "100vw"
    },
    avatarComputer: {
        width: "12vw",
        height: "12vw",
        float: "left"

    },
    avatarMobile: {
        width: "15vw",
        height: "15vw",
        marginBottom: "7vh",
        marginLeft: "42vw"

    },
    textComputer: {
        marginTop: "5vw",
    },
    textMobile: {
        margin: 0
    },
    title: {
        background: "#fcd238",
        marginTop: 0
    },
    containerComputer: {
        width:"98.7vw",
        height:"70vh",
        background:"#fcd238",
        flexGrow: 1,
    },
    containerMobile: {
        width:"98.7vw",
        height:"75vh",
        background:"#fcd238",
        marginLeft: 0,
        flexGrow: 1,
    }
};

class AboutMe extends React.Component {

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
        return (
            <VizSensor //librairies permettant d'afficher le composant uniquement si sa position se trouve dans l'écran visible
                onChange={(isVisible) => {
                    this.handleFade(isVisible);
                }}
            >

                    {this.state.isMobile ? (
                        
                            <div className={this.props.classes.containerMobile}>
                                <center><h1 className={this.props.classes.title}>Me concernant</h1></center>
                            
                                <Fade in={this.state.isVisible}>
                                    <Avatar alt="Abasse FIDALY" src={abasse} className={this.props.classes.avatarMobile} />
                                </Fade>
                                <Fade in={this.state.isVisible}>
                                    <Container><p>Passionné par l'informatique,les nouvelles technologies, je travaille à l'INSEE en tant que développeur fullstack. 
                                    Autodidacte, et polyvalent je désire faire  carrière dans l'informatique afin d'acquérir de l'expertise dans le développement web
                                    </p>
                                    </Container>
                                </Fade>
                            </div>
                    ) : (
                        
                            <div id="box" className= {this.props.classes.containerComputer}>
                                <center><h1 className={this.props.classes.title}>Me concernant</h1></center>
                                
                                <Fade in={this.state.isVisible}>
                                    <Avatar alt="Abasse FIDALY" src={abasse} className={this.props.classes.avatarComputer} />
                                </Fade>
                                <Fade in={this.state.isVisible}>
                                    <p className={this.props.classes.textComputer}>Passionné par l'informatique,les nouvelles technologies, je travaille à l'INSEE en tant que développeur fullstack. 
                                        Autodidacte, et polyvalent je désire faire  carrière dans l'informatique afin d'acquérir de l'expertise dans le développement web</p>
                                </Fade>
                            </div>
                    )}
                                    
            </VizSensor>
            
        )
    }
}

export default withStyles(styles)(AboutMe)

