import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../pages/Welcome.css';
import trigger from '../components/assets/trigger.png';


function Welcome() {
    return (
        <div className="welcome_page">
            <div className="welcome_pic"> 
                <div className="logo">
                    <img src={trigger} alt={"logo"}/>      
                </div> 
                       
                <p>
                   <br></br>
                    Some things should
                    </p>
                <p>
                    be definetely
                            <span className="colortext">
                        DONE
                            </span>
                </p>
                <div className="welcome_but">

                    {/* 
                    <Button  variant="contained" color="secondary">
                        <Link to="/registration">Registration</Link>
                    </Button> */}
                    <div>
                    <Button id="but-red"  >
                        <Link to="/signup">Sign up</Link>
                    </Button>
                    </div>
                    <div>
                    <Button id="but-white">
                        <Link to="/login">Log in</Link>
                    </Button>
                    </div>

                 
                </div>

            </div>

            <div className="welcome_text">
                <p>
                    
                    <span class="colortext">
                        A Simple Act ...
                    </span>
                </p>
                <h3>that will change your life</h3>

                <p>
                    simple and powerful. Everything you need to start is available free on this website
                </p>
                <p>
                    <span className="colortext"> Sometimes </span>
                     we need someone to act in our favor...
                </p>

                <h3>You can ask your friend, relative, or collegue.</h3>
                 <p> 
                     What happens if they forget to do something really important? You never know... We’ll make sure that something will be done on time trigger, event or periodically
                </p>
                <div className="welcome_text">
                </div>   
                <p> 
                    Our app will help you! the 
                    <span class="colortext">
                        "TRIGGER" 
                    </span>
                    will send whatever you need ... whoever you want ... when you need ...
                </p>
                                                
            </div>      




        </div>

                                
    );
}
                
export default Welcome;                                                