import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../pages/Welcome.css';
import trigger from '../components/assets/trigger.png';


function Welcome() {
    return (
        <div className="welcome_page">
            <div className="welcome_pic"> 
               
                    <h1> 
                        One Letter
                    </h1>                
                        
                    <h3>
                        <span className="colortext">can change your life</span></h3>
                    <p>
                        so some
                        <span className="colortext">
                            things 
                        </span>

                         should
                    </p>
                    <p>
                        be definetely
                            <span className="colortext">
                                DONE
                            </span>
                    </p>
              
                <div className="welcome_but">

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
                    <br></br>
                    easy and powerful. Everything you need to start is available free on this website
                </p>
                               
               
                <div className="line_red">                   
                    <br></br>
                </div>

                 <p> 
                 You can ask your friend, relative or collegue.
                 What happens if they forget to do something really important? You never know...
                  We will make sure your  <span className="colortext">message </span> arrives 
                  <span className="colortext"> on time... </span>
                  
                </p>
                 
                <div className="line_red">
                   
                   <br></br>
               </div>
               
                <p> 
                    Project
                    <span class="colortext">
                        "TRIGGER" 
                    </span> will help you!  Our app 
                    will send any message ... to any person you choose ...any moment of time you need it ... even  in a day, in  a week  or in a month
                </p>
                <div className="line_red">
                   
                   <br></br>
               </div>
                     
                <p>
                    <span class="colortext">
                        All you need...  
                   </span>
                   <br></br>
                    is to go to our website, log into your account, 
                    create a new "trigger" so that we know WHAT message, TO WHOM and WHEN we should to send.. 
                    And we will do it for you, even if you are offline and unable to   
                </p>              
                                                
            </div> 
        </div>
                               
    );
}
                
export default Welcome;                                                