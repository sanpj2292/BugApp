import React,{ useState, useLayoutEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


function Toaster(props) {

    const {open,message} = {...props};
    const [close, setClose] = useState(open);

    useLayoutEffect(() => setClose(!open), props);

    function handleClose(ev, reason) {
        if(reason === 'clickaway') {
            return ;
        }
        setClose(true);
    };

    return (
        <div>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }} ContentProps={{
                'aria-describedby': 'message-content'
            }}
            open={!close}
            onClose={handleClose}
            autoHideDuration={6000}
            message={<span id='message-content'>{message}</span>}
            action={[
                <IconButton key='close-icon' aria-label='Close'
                    color='inherit' onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            ]}
            />
        </div>
    );

}


export default Toaster;