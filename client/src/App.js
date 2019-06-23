import React from 'react';
import './css/App.css';
import InboxList from "./components/inbox-list";
import updateIconStyles from "./styles/update-icon-styles";
import { makeStyles,createStyles } from './styles/styles';
import { AppBar,Paper,Toolbar, Typography } from "@material-ui/core";

const sampleData = [{
  summary: '(HUE Version 4.0)Bug1',
  Importance: 'Middle',
  Labo: 'CFM',
  MileStone:'V41_1902',
  Priority:'F',
  Progress:'Developed',
  RealtionTickets: '62588',
},{
  summary: '(HUE Version 4.0)Bug2',
  Importance: 'High',
  Labo: 'CAM',
  MileStone:'V41_1903',
  Priority:'F',
  Progress:'New',
  RealtionTickets: '62589',
},{
  summary: '(HUE Version 4.0)Bug3',
  Importance: 'High',
  Labo: 'CBM',
  MileStone:'V41_1906',
  Priority:'F',
  RealtionTickets: '62590',
  Progress:'DevelopConfirmed',
},{
  summary: '(HUE Version 4.0)Bug4',
  Importance: 'High',
  Labo: 'CCM',
  MileStone:'V41_1909',
  Priority:'F',
  RealtionTickets: '63595',
  Progress:'Evaluated',
},{
  summary: '(HUE Version 4.0)Bug5',
  Importance: 'Middle',
  Labo: 'CCM',
  MileStone:'V41_1909',
  Priority:'F',
  RealtionTickets: '63595',
  Progress:'Evaluated',
}]

const useStyles = makeStyles(theme => createStyles({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '100%',
  },
}))

function App() {
  const iconClasses = updateIconStyles();
  const appClasses = useStyles();
  const nonDetailCols = ['Importance','Progress','summary'];
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography  variant='h6'>
            Bug Trac Application
          </Typography>

        </Toolbar>
      </AppBar>
      <div className="App">
        <Paper className={appClasses.paper} elevation={5}>
          <InboxList dataArr={sampleData} iconClass={iconClasses.icon}
            nonDetailsCols={nonDetailCols}></InboxList>
        </Paper>
      </div>
    </div>
  );
}

export default App;
