import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
       
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));

const Section = (props) => {
    const stl = useStyles();
    return (
        <div >
            <div>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            {props.title}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={stl.section2}>
                {props.children}
            </div>
        </div>
    )
}




export default Section;