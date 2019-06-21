import React, { useState } from "react";
import { ExpansionPanel,ExpansionPanelSummary, Typography } from "@material-ui/core/";
import InboxListDetails from "./inbox-list-details";

function InboxList(props) {
    const {dataArr} = {...props}

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel: false);
    
    return (
            dataArr.map((val,index) => {
            return (
                <ExpansionPanel square expanded={expanded === 'panel'+index} 
                    onChange={handleChange('panel'+index)}>
                    <ExpansionPanelSummary aria-controls={'panel'+index+"-content"} 
                        id={'panel'+index+"-header"}>
                        <Typography>{val.summary}</Typography>
                    </ExpansionPanelSummary>
                    <InboxListDetails data={val} index={index} />
                </ExpansionPanel>)
            })
    );
}

export default InboxList;