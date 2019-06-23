import React from 'react';
import './css/App.css';
import InboxList from "./components/inbox-list";
import updateIconStyles from "./styles/update-icon-styles";

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

function App() {
  const iconClasses = updateIconStyles();
  const nonDetailCols = ['Importance','Progress','summary'];
  return (
    <div className="App">
      <InboxList dataArr={sampleData} iconClass={iconClasses.icon}
        nonDetailsCols={nonDetailCols}></InboxList>
    </div>
  );
}

export default App;
