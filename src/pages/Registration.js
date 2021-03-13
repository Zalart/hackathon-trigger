import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function Registration() {
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
                   
                <Button id="but-test"  >                     
                     Log in
                 </Button>
               
                 <Button id="but-white"  >                     
                     Registr
                 </Button>


                </div>

            </div>
            <div className="welcome_text">
                <h1>It's a registration page</h1>              
                     
                <Link to="/home">To Home page</Link>

                
            </div>
                    
        </div>





    )
};

export default Registration
