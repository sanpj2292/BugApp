import React, {useState} from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ExpansionPanelDetails, TextField, Paper } from "@material-ui/core";
import InboxList from "./inbox-list";
import iconStyles from "../styles/update-icon-styles";

const useStyles = makeStyles(theme => createStyles({
    textField: {
        margin: theme.spacing(1),
        // marginRight: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        width: '100%',
    },
}))

function InboxListDetails(props) {
    const classes = useStyles();
    const {data,index,key} = {...props};
    const nonDetailCols = ['BugId','Importance','Progress','Summary'];
    return (
        <ExpansionPanelDetails className={classes.container}>
            {
                Object.keys(data).map(k => {
                    return (k !== 'RelationTickets'?
                    <TextField
                        id={k+"-input"+index}
                        label={k}
                        key={key+'-'+'text-field'+k+index+'-key'}
                        defaultValue={data[k]}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />:<Paper className={classes.paper} elevation={5}>
                          <InboxList dataArr={data[k]} className={iconStyles().icon} 
                            key={key+'-bug-task-'} idcol={'BugId'} 
                            nonDetailsCols={nonDetailCols}/>
                        </Paper>)
                })
            }
        </ExpansionPanelDetails>
    )
}

export default InboxListDetails;