import React from "react";
import ProgressStyles from "../styles/progress-styles";
import { Typography, ExpansionPanelSummary } from "@material-ui/core";


function ColoredLabelColumn(props) {
    const classes = ProgressStyles();
    const {value, index} = {...props};
    return (
        <div className={classes.root + ' ' + classes[value]}>
            <Typography variant='subhead' >{value}</Typography>
        </div>
    );
}

export default ColoredLabelColumn;