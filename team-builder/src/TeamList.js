import React, {useState} from 'react';
import {teamMembers} from './team-members';

function TeamList() {
    const [myTeam, setMyTeam] = useState(teamMembers);
    return (
        <div>
            <h3>Team List Component</h3>
            {
            myTeam.map((member, index) => <p key={index}>{member.name[0]}</p>)
            }
        </div>
    )
}

export default TeamList