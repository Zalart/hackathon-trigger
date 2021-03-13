import React from 'react'

import Typography from '@material-ui/core/Typography';

/* const styles = ((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    })
);
 */
function Trigger(props) {
    const { classes } = props;
    return (
        <main>
            <div />
            <Typography paragraph>
                Hello I am a Trigger
            </Typography>
        </main>
    )


}

export default Trigger;