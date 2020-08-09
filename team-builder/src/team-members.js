// PARTY
export const teamMembers = [
    {
    name: ['greta', 'bastion'], //first name, last name
    bio:'She hails from the kingdom of Luz and has worked as a guard that protects its castle for over 5 years. It was never her dream job but it pays her bills.',
	title: 'guard',
	hpBase: 30,
	spBase: 5,
    spCur:0, 
    hpCur:20,
	atk: 5,
	def: 10,
	spd: 5,
	wpn: 'guardsmen\'s short sword and shield',
	artf: null //artifact equipped
    },
    {
    name: ['thalassa', 'del mar'], 
    bio: 'She has a very famous older brother whom she adores. Being known as THE WISE ONE\'s sister does not offend her.',
	title: 'witch',
	hpBase: 15,
    spBase: 10,
    spCur:10,
    hpCur:5,
	atk: 10,
	def: 5,
	spd: 12,
	wpn: 'modified witchbroom',
	artf: 'broom charm'
    }
]

// ARTEFACTS
const gldArmor = {
	name: 'golden armor',
	desc: 'looks hardly used. jewels and runes are engraved all along the sides. doubles defense.',
	effect: ['*', 2, 'def'] //multiply 2 to def
};

let brmCharm = {
	name: 'broom charm',
	desc: 'given to thalassa by her older brother. he made it long before he became THE WISE ONE so it is more of a keepsake. adds 3 to base sp.',
	effect: ['+', 3, 'spBase'] // add 3 to base sp

}


