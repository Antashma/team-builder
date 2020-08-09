import React from 'react';

function TeamForm(props) {
    return (
        <section>
            <form className='team-form'>
                <div>
                    <label htmlFor='fName'>First Name: </label>
                    <input id='fName' type='text' placeholder='first name'/>
                </div>
                <div>
                    <label htmlFor='lName'>Last Name: </label>
                    <input id='lName' type='text' placeholder='last name'/>
                </div>
                <div>
                    <label htmlFor='job'>Job Title: </label>
                    <input id='job' type='text' placeholder='ex. guard, witch, chef...'/>
                </div>
                <div>
                    <label htmlFor='teamRole'>Role: </label>
                    <input id='teamRole' type='text' placeholder='ex. Tank, AOE, Medic...'/>
                </div>
                <label htmlFor='bio'>Bio</label>
                <textarea id='bio' placeholder='Describe this member in two sentences...'/>
                <button>Add Member</button>
            </form>
        </section>
    )

};

export default TeamForm;