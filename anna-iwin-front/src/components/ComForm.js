import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {


    },

    p1: {
        //display: 'flex', // flex will line elements horizontally; wrap will line them vertically
        //flexWrap: 'wrap', // flex will not make a new line if it is too long, wrap will make a new line with what does not fit
        '& > *': {
            //margin: theme.spacing(1), // how far apart the elements are
            width: theme.spacing(75), // how wide the elements are 
            // height: theme.spacing(75), // how tall the elements are
        },
    },

    inside: {
        /*display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0, 1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        }, */
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        /*'& .MuiSelect-root': {
            margin: theme.spacing(1),
            width: '18ch',
        },*/
    },

    paper: {
        background: '#fff2ec',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }


}));

function ComForm() {
    const classes = useStyles();

    const [type, setType] = React.useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }


    return (
        <div className={classes.root}>

            <form className={classes.p1} noValidate autoComplete="off">

                <Paper elevation={5} className={classes.paper} background="blue">
                    <div className={classes.inside}>

                        <Grid
                            container
                            spacing={1}
                            alignContent="center"
                        //justify="center"
                        >
                            <Grid item xs={12}>
                                <TextField
                                    id="fullName"
                                    label="Full Name"
                                    align="center"
                                    variant="outlined"

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    variant="outlined"

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="size"
                                    label="Size"
                                    variant="outlined"

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        native
                                        value={type}
                                        onChange={handleTypeChange}
                                        label="type"
                                    >
                                         <option aria-label="None" value="" />
                                        <option value={"Bust"}>Bust</option>
                                        <option value={"Waist"}>Waist</option>
                                        <option value={"Full Body"}>Full Body</option>
                                        <option value={"Character with Background"}>Character with Background</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="dateReq"
                                    label="Date Needed"
                                    type="date"
                                    variant="outlined"

                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="comments"
                                    label="Comments"
                                    placeholder=""
                                    multiline
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        position: 'relative',
                                        //left: '50%',
                                    }}
                                >
                                    Submit Commission
                                </Button>
                            </Grid>

                        </Grid>
                    </div>


                </Paper>
            </form>

        </div>
    );
}


export default ComForm;