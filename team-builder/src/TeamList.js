import React from 'react'

function TeamList({members}) {
    return (
        <div>
            <h3>Team List Component</h3>
            {
            members.map((member, index) => 
                <p key={index}>
                    {member.name} the {member.title} ({member.role}) <br />
                    {member.bio}
                </p>)
            }
            
        </div>
    )
}

export default TeamList