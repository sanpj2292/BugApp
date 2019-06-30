import React from 'react';
import './css/App.css';
import InboxList from "./components/inbox-list";
import updateIconStyles from "./styles/update-icon-styles";
import { makeStyles,createStyles } from './styles/styles';
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '100%',
  },
}))

function App(props) {
  const iconClasses = updateIconStyles();
  const appClasses = useStyles();
  const nonDetailCols = ['DprId','Importance','Progress','Summary'];
  const {data,updateBugDetails} = {...props};
  return (
      <div className="App">
        <Paper className={appClasses.paper} elevation={5}>
          <InboxList dataArr={data} iconClass={iconClasses.icon} idcol='DprId'
            nonDetailsCols={nonDetailCols} uKey='dpr'
            updateBugDetails={updateBugDetails}></InboxList>
        </Paper>
      </div>
  );
}

export default App;
