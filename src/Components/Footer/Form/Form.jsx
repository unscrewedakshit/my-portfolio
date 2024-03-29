import React from 'react';
import {Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    return (
        <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate>
            <TextField placeholder="Your Name"  className={classes.input} style={{backgroundColor:'white'}} />
            <TextField placeholder="Your Email" className={classes.input} style={{backgroundColor:'white'}} /> 
            <TextField placeholder="Message" className={classes.input} style={{backgroundColor:'white'}} multiline rows={4}/>
            <Button className={classes.button}>Send&nbsp;<SendIcon /> </Button>
        </form>
    );
};

export default Form;

