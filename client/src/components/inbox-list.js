import React, { useState } from "react";
import { ExpansionPanel,ExpansionPanelSummary, Typography, Grid, IconButton } from "@material-ui/core/";
import InboxListDetails from "./inbox-list-details";
import ColoredLabelColumn from "./colored-label-column";
import CheckIcon from "@material-ui/icons/Check";
import updateButtonStyles from "../styles/update-button-styles";

function InboxList(props) {
    const classes = updateButtonStyles();
    const {dataArr,iconClass,nonDetailsCols,idcol,uKey,updateBugDetails} = {...props}

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        var eventTagName = event.target.tagName.toLowerCase();
        if (eventTagName && !['button','svg'].includes(eventTagName)) {
            setExpanded(newExpanded && panel ? panel: false)
        }
    };

    const sliceObject = (obj,filterOutArr) => {
        return Object.keys(obj)
            .filter((key) => !filterOutArr.includes(key)&& key!== '__v' && key !== '_id')
            .reduce((result,k) => {
                    result[k] = obj[k];
                    return result}, {});
    }

    return (
            dataArr.map((val,index) => {
            return (
                <ExpansionPanel key={uKey+'record'+ index +'-key'} 
                    square expanded={expanded === uKey+'panel'+index} 
                    onChange={handleChange(uKey+'panel'+index)}>
                    <ExpansionPanelSummary aria-controls={'panel'+index+"-content"} 
                        id={uKey+'panel'+index+"-header"}>
                        <Grid container justify='space-between'>
                            <Grid item key={uKey+'-'+idcol+index+'-key'} xs={2}>
                                <Typography>{val[idcol]}</Typography>
                            </Grid>
                            <Grid item key={uKey+'-'+'summary'+index+'-key'} xs={2}>
                                <Typography>{val.Summary}</Typography>
                            </Grid>
                            <Grid item key={uKey+'-'+'progress'+index+'-key'} xs={2}>
                                <ColoredLabelColumn value={val.Progress} />
                            </Grid>
                            <Grid item key={uKey+'-'+'importance'+index+'-key'} xs={2}>
                                <ColoredLabelColumn value={val.Importance} />
                            </Grid>
                            <Grid item key={uKey+'-'+'update'+index+'-button'} xs={2}>
                                <IconButton 
                                    className={classes.button}
                                    aria-label='Check' id={uKey+'update'+index+'-button'}
                                    onClick={updateBugDetails}>
                                    <CheckIcon className={iconClass ? iconClass:null} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <InboxListDetails 
                        data={ sliceObject(val,nonDetailsCols) } 
                        index={index} 
                        uKey={uKey+index} 
                        updateBugDetails={updateBugDetails}/>
                </ExpansionPanel>)
            })
    );
}

export default InboxList;