import React from 'react';
import Periods from './components/Periods'
import './App.css';

const allSchedules = JSON.parse(
  '[[{"name":"1","start":"7:40","end":"8:30"},{"name":"2","start":"8:35","end":"9:30"},{"name":"3","start":"9:35","end":"10:27"},{"name":"Break","start":"10:27","end":"10:42"},{"name":"4","start":"10:47","end":"11:39"},{"name":"5","start":"11:44","end":"12:36"},{"name":"Lunch","start":"12:36","end":"13:06"},{"name":"6","start":"13:11","end":"14:03"},{"name":"7","start":"14:08","end":"15:00"}],[{"name":"1","start":"7:40","end":"8:30"},{"name":"2","start":"8:35","end":"10:10"},{"name":"Break","start":"10:10","end":"10:25"},{"name":"4","start":"10:30","end":"12:05"},{"name":"Tutorial","start":"12:10","end":"12:50"},{"name":"Lunch","start":"12:50","end":"13:20"},{"name":"6","start":"13:25","end":"15:00"}],[{"name":"1","start":"7:40","end":"8:30"},{"name":"3","start":"8:35","end":"10:10"},{"name":"Break","start":"10:10","end":"10:25"},{"name":"5","start":"10:30","end":"12:05"},{"name":"Lunch","start":"12:05","end":"12:35"},{"name":"7","start":"12:40","end":"14:15"}],[{"name":"1","start":"7:40","end":"8:30"},{"name":"2","start":"8:35","end":"10:10"},{"name":"Break","start":"10:10","end":"10:25"},{"name":"4","start":"10:30","end":"12:05"},{"name":"Tutorial","start":"12:10","end":"12:50"},{"name":"Lunch","start":"12:50","end":"13:20"},{"name":"6","start":"13:25","end":"15:00"}],[{"name":"1","start":"7:40","end":"8:30"},{"name":"3","start":"8:35","end":"10:10"},{"name":"Break","start":"10:10","end":"10:25"},{"name":"5","start":"10:30","end":"12:05"},{"name":"Lunch","start":"12:05","end":"12:35"},{"name":"7","start":"12:40","end":"14:15"}]]'
);

function App() {
  return (
    <div className="App">
      <Periods schedule={allSchedules[2]}/>
    </div>
  );
}

export default App;
