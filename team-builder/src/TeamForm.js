import React , { useState } from 'react';

function TeamForm(props) {
    const [member, setMember] = useState(
        {
        name: 'samara', 
        title: 'mystic',
        role: '',
        bio: 'a being from a faraway land that prefers their faraway land.'
        }
        )
    const handleChanges = event => {
        console.log('handleChanges', event.target.value)
        let newMemberObj = {...member, [event.target.name]: event.target.value}
        console.log('new member value', newMemberObj)
        setMember(newMemberObj)
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member)
        setMember({
            name: 'floy', 
            title: 'pilot',
            role: '',
            bio: 'he collected airplane models as a child and now he is a very proud pilot of his very own'
            })
    }
    return (
        <section>
            <h3>Team Form Component</h3>
            <form className='team-form' onSubmit={submitForm}>
                <div>
                    <label htmlFor='fName'>First Name: </label>
                    <input id='fName' name='name' type='text' placeholder='first name' onChange={handleChanges} value={member.name}/>
                </div>
                <div>
                    <label htmlFor='job'>Job Title: </label>
                    <input id='job' name='title' type='text' placeholder='ex. guard, witch, chef...' onChange={handleChanges} value={member.title}/>
                </div>
                <div>
                    <label htmlFor='teamRole'>Role: </label>
                    <select id='teamRole' name='role' type='text' onChange={handleChanges} value={member.role}>
                        <option value=''> --Select Member Role-- </option>
                        <option value='Mage'> AOE </option>
                        <option value='Crowd Control'> CC </option>
                        <option value='Medic'> Medic </option>
                        <option value='Tank'> Tank </option>
                        <option value='Warrior'> Sniper </option>
                    </select>
                </div>
                <label htmlFor='bio'>Bio</label>
                <textarea id='bio' name='bio' placeholder='Describe this member in two sentences...' onChange={handleChanges} value={member.bio}/>
                <button type='submit'>Add Member</button>
            </form>
        </section>
    )

};

export default TeamForm;