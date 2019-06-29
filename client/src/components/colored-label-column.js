import React from "react";
import ProgressStyles from "../styles/progress-styles";
import { Typography } from "@material-ui/core";


function ColoredLabelColumn(props) {
    const classes = ProgressStyles();
    const {value} = {...props};
    return (
        <div className={classes.root + ' ' + classes[value]}>
            <Typography variant='subhead' >{value}</Typography>
        </div>
    );
}

export default ColoredLabelColumn;