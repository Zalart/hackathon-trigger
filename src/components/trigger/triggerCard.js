import React from 'react';
import { Grid, Container, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, makeStyles } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles((theme) => ({
    nopointer: {
       cursor: 'default'
    },
}));
function TriggerCard({value, data, users, id}) {
    const classes = useStyles();

    return (
        <Grid item xs={12} >
            { (id !==0) && <Divider variant="inset" />}
 <ListItem button className={classes.nopointer} >    <ListItemAvatar>
                    <Avatar> 
                     <TimerIcon /> 
                    </Avatar>
                  </ListItemAvatar>
                   <ListItemText primary={users[0].value + "..."} secondary="reciever"/> 
                    <ListItemText primary={value} secondary="message"/> <ListItemText primary={data} secondary="date trigger" /> 
                </ListItem>
        </Grid>
    )
}

export default TriggerCard;
