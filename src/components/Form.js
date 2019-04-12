import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    textField: {
      margin: theme.spacing.unit,
      width: '100%'
    },
    button: {
      margin: theme.spacing.unit,
      width: '95%'
    }
})

const Form = (props) => (
    <form onSubmit={props.getFood}>
        <Grid container spacing={8} alignItems='center'>
            <Grid item xs={9}>
                <TextField
                id="outlined-search"
                label="Keyword or Phase Search"
                name="keyword"
                type="search"
                margin="normal"
                variant="outlined"
                className={props.classes.textField}
                />
            </Grid>

            <Grid item xs={3}>
                <Button
                className={props.classes.button}
                color='primary'
                type='submit'
                variant='raised'
                >
                    Search
                </Button> 
            </Grid>
        </Grid>   
        
    </form>
)

export default withStyles(styles)(Form)