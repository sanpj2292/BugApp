import React, { useState } from "react";
import { ExpansionPanel,ExpansionPanelSummary, Typography, Grid, IconButton } from "@material-ui/core/";
import InboxListDetails from "./inbox-list-details";
import ColoredLabelColumn from "./colored-label-column";
import CheckIcon from "@material-ui/icons/Check";
import updateButtonStyles from "../styles/update-button-styles";

function InboxList(props) {
    const classes = updateButtonStyles();
    const {dataArr,iconClass,nonDetailsCols,idcol,key} = {...props}

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel: false);

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
                <ExpansionPanel key={'record'+ index +'-key'} 
                    square expanded={expanded === 'panel'+index} 
                    onChange={handleChange('panel'+index)}>
                    <ExpansionPanelSummary aria-controls={'panel'+index+"-content"} 
                        id={'panel'+index+"-header"}>
                        <Grid container justify='space-between'>
                            <Grid item key={key+'-'+idcol+index+'-key'} xs={2}>
                                <Typography>{val[idcol]}</Typography>
                            </Grid>
                            <Grid item key={key+'-'+'summary'+index+'-key'} xs={2}>
                                <Typography>{val.Summary}</Typography>
                            </Grid>
                            <Grid item key={key+'-'+'progress'+index+'-key'} xs={2}>
                                <ColoredLabelColumn value={val.Progress} />
                            </Grid>
                            <Grid item key={key+'-'+'importance'+index+'-key'} xs={2}>
                                <ColoredLabelColumn value={val.Importance} />
                            </Grid>
                            <Grid item key={key+'-'+'update'+index+'-button'} xs={2}>
                                <IconButton 
                                    className={classes.button}
                                    aria-label='Check' id={'update'+index+'-button'}>
                                    <CheckIcon className={iconClass ? iconClass:null} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <InboxListDetails 
                        data={ sliceObject(val,nonDetailsCols) } 
                        index={index} 
                        key={key+'-details'+index}/>
                </ExpansionPanel>)
            })
    );
}

export default InboxList;