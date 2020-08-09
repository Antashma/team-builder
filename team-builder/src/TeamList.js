import React, {useState} from 'react';
import {teamMembers} from './team-members';

function TeamList(props) {
    const [myTeam, setMyTeam] = useState(teamMembers);
    return (
        <div>
            <h3>Team List Component</h3>
            {
            myTeam.map(member => <p>{member.name[0]}</p>)
            }
        </div>
    )
}

export default TeamList