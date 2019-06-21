import React from 'react';
import './css/App.css';
import InboxList from "./components/inbox-list";

const sampleData = [{
  summary: 'Bug1',
  Importance: 'Middle',
  Labo: 'CFM',
  MileStone:'V41_1902',
  Priority:'F',
  RealtionTickets: '62588',
},{
  summary: 'Bug2',
  Importance: 'High',
  Labo: 'CAM',
  MileStone:'V41_1903',
  Priority:'F',
  RealtionTickets: '62589',
},{
  summary: 'Bug3',
  Importance: 'High',
  Labo: 'CBM',
  MileStone:'V41_1906',
  Priority:'F',
  RealtionTickets: '62590',
  Labo1: 'CBM1',
  MileSton1e:'V41_19061',
  Priority1:'F1',
  RealtionTickets1: '62591',
},{
  summary: 'Bug4',
  Importance: 'High',
  Labo: 'CCM',
  MileStone:'V41_1909',
  Priority:'F',
  RealtionTickets: '63595',
}]

function App() {
  return (
    <div className="App">
      <InboxList dataArr={sampleData}></InboxList>
    </div>
  );
}

export default App;
