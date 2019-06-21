import React, {useState} from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ExpansionPanelDetails, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}))

function InboxListDetails(props) {
    const classes = useStyles();
    const {data,index} = {...props};
    return (
        <ExpansionPanelDetails className={classes.container}>
            {
                Object.keys(data).map(key => {
                    return (
                    <TextField
                        id={key+"-input"+index}
                        label={key}
                        defaultValue={data[key]}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />)
                })
            }
        </ExpansionPanelDetails>
    )
}

export default InboxListDetails;