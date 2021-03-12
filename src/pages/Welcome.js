import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

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
                    <Button className="button" variant="contained" color="secondary" >
                        <Link to="/registration">Registration</Link>
                    </Button>
                </div>
            </div>


            <div className="welcome_text">
                {/* <h1>Welcome page</h1> */}
                <p>
                    <span class="colortext"> Sometimes  </span>
                     we need someone to act in our favor.
                </p>
                <p> You can ask your friend, relative, or collegue.</p>
                <p>  What happens if they forget to do something really important? You never know...</p>
                <p> We’ll make sure that somthing will be done on time trigger, event or  periodically</p>
            </div>
                    
        </div>
    )
}

export default Welcome
