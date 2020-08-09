import React from 'react';

function TeamForm(props) {
    return (
        <section>
            <form className='team-form'>
                <input type='text' placeholder='first name'/>
                <input type='text' placeholder='last name'/>
                <textarea placeholder='Describe this member in two sentences...'/>
                <button>Add Member</button>
            </form>
        </section>
    )

};

export default TeamForm;