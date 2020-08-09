import React, { useState } from 'react';

import TeamList from './TeamList'
import TeamForm from './TeamForm'
import {teamMembers} from './team-members';

import './App.css';


function App() {
  const [myTeam, setMyTeam] = useState(teamMembers);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      title: member.title,
      bio:member.bio,
      role: member.role
    }
    setMyTeam([...myTeam, newMember])
  }
  return (
    <div className="App">
      <TeamList members={myTeam}/>
      <TeamForm addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
