import React, { useState } from "react";
import { ExpansionPanel,ExpansionPanelSummary, Typography, Grid, IconButton } from "@material-ui/core/";
import InboxListDetails from "./inbox-list-details";
import ColoredLabelColumn from "./colored-label-column";
import CheckIcon from "@material-ui/icons/Check";
import updateButtonStyles from "../styles/update-button-styles";

// const useStyles = makeStyles((theme) => ({
//     button: {
//         margin: theme.spacing(1),
//     },
// }),)

function InboxList(props) {
    const classes = updateButtonStyles();
    const {dataArr,iconClass} = {...props}

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel: false);
    
    return (
            dataArr.map((val,index) => {
            return (
                <ExpansionPanel key={'record'+ index +'-key'} 
                    square expanded={expanded === 'panel'+index} 
                    onChange={handleChange('panel'+index)}>
                    <ExpansionPanelSummary aria-controls={'panel'+index+"-content"} 
                        id={'panel'+index+"-header"}>
                        <Grid container justify='space-between'>
                            <Grid item key={'summary'+index+'-key'} xs={2}>
                                <Typography>{val.summary}</Typography>
                            </Grid>
                            <Grid item key={'progress'+index+'-key'} xs={2}>
                                <ColoredLabelColumn value={val.Progress} />
                            </Grid>
                            <Grid item key={'importance'+index+'-key'} xs={2}>
                                <ColoredLabelColumn value={val.Importance} />
                            </Grid>
                            <Grid item key={'update'+index+'-button'} xs={2}>
                                <IconButton 
                                    className={classes.button}
                                    aria-label='Check' id={'update'+index+'-button'}>
                                    <CheckIcon className={iconClass ? iconClass:null} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <InboxListDetails data={val} index={index} />
                </ExpansionPanel>)
            })
    );
}

export default InboxList;