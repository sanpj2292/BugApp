import React, {useState, useLayoutEffect} from 'react';
import { makeStyles, createStyles} from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import StatGrid from "./stat-grid";

const useStyles = makeStyles(theme => createStyles({
    paper: {
      position: 'absolute',
      top:'30%',
      left:'5%',
      width: '80%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
    },
  }));

function StatDialog(props) {
    const classes = useStyles();
    const {open,gridData} = {...props};
    const [close, setClose] = useState(open);
    const headers = ['New','Developing','Develop Confirmed','Developed'
    ,'Develop Confirming','Remand','Evaluating','Evaluated']

    useLayoutEffect(() => setClose(!open), [props]);

    function handleClose(ev, reason) {
        if(reason === 'clickaway') {
            return ;
        }
        setClose(true);
    };

    return (
        <div>
            <Modal open={!close} onEscapeKeyDown={handleClose} onBackdropClick={handleClose}>
                <div className={classes.paper}>
                    <StatGrid gridData={gridData} headers={headers}/>
                </div>
            </Modal>
        </div>
    );
}

export default StatDialog;