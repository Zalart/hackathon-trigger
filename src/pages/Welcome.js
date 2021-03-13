import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import '../pages/Welcome.css';

function Welcome() {
    return (
        <div className="welcome_page">
           
            <div className="welcome_pic">
                <div>
                           
                    <p>
                        Some things should 
                    </p>
                    <p>  
                        be definetely 
                            <span class="colortext"> 
                                DONE
                            </span>
                    </p>
                </div>
                <div className="welcome_but">
                   
                    {/* 
                    <Button  variant="contained" color="secondary">
                        <Link to="/registration">Registration</Link>
                    </Button> */}
                                      
                    <Button id="but-red"  >
                        <Link to="/registration">Registration</Link>
                    </Button>
                  
                    {/* <Button id="botr" >
                        <Link to="/registration">Registration</Link>
                    </Button>  */}


                </div>
            </div>


            <div className="welcome_text">
                <p>
                    <span class="colortext"> 
                         A Simple Act
                    </span>
                    </p> 
                <b>that will change your life</b>
                
                <p>  
                    Simple and powerful. Everything you need to start is available free on this website
                </p> 
                <p>
                    <span class="colortext"> Sometimes  </span>
                     we need someone to act in our favor.
                </p>
                <h3> You can ask your friend, relative, or collegue.</h3>
                <p>  What happens if they forget to do something really important? You never know... We’ll make sure that somthing will be done on time trigger, event or  periodically</p>
            </div>
                    
        </div>
    )
}

export default Welcome
