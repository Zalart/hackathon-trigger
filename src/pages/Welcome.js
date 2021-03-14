import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../pages/Welcome.css';
import trigger from '../components/assets/trigger.png';


function Welcome() {
    return (
        <div className="welcome_page">
            <div className="welcome_pic"> 
                {/* <div className="logo">
                    <img src={trigger} alt={"logo"}/>      
                </div>  */}
                       
                <p>
                   <br></br>
                   <span className="colortext">
                   Some 
                    </span>

                    things should
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
                {/* <p>
                    <span className="colortext"> Sometimes </span>
                     we need someone to act in our favor...
                </p> */}
                
                 <p> 
                 You can ask your friend, relative, or collegue.
                 What happens if they forget to do something really important? You never know...
                  We will make sure your message arrives 
                  <span className="colortext"> ON TIME </span>
                  
                </p>
                <div className="welcome_text">
                </div>   
                <p> 
                    Our app will help you! the 
                    <span class="colortext">
                        "TRIGGER" 
                    </span>
                    will send <b>any message .</b>.. to <b>any person</b> you choose ... <b>any moment of time</b> you need it - in a day , in  a week  or in a month
                </p>
                                                
            </div>      




        </div>

                                
    );
}
                
export default Welcome;                                                