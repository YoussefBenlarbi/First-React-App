import photo1 from './../photo/photo1.png';
import photo2 from './../photo/photo2.jpg';
import photo3 from './../photo/photo3.png';

export const listeStagiaire = [
	{
		id: 1,
		prenom: 'Zouhair',
		nom: 'Respo',
		photo: photo3,
		modules: [
			{ nomModule: 'POO', moyenne: 14, coe: 2 },
			{ nomModule: 'React', moyenne: 17, coe: 2 },
			{ nomModule: 'Laravel', moyenne: 18, coe: 3 },
		],
	},
	{
		id: 2,
		prenom: 'HAMID',
		nom: 'BLED',
		photo: photo2,
		modules: [
			{ nomModule: 'SQL', moyenne: 15, coe: 2 },
			{ nomModule: 'Back End', moyenne: 19, coe: 2 },
			{ nomModule: 'Laravel', moyenne: 11, coe: 3 },
		],
	},
	{
		id: 3,
		prenom: 'HAMID',
		nom: 'BLED',
		photo: photo1,
		modules: [
			{ nomModule: 'SQL', moyenne: 20, coe: 2 },
			{ nomModule: 'Back End', moyenne: 19, coe: 2 },
			{ nomModule: 'Laravel', moyenne: 17, coe: 3 },
		],
	},
];
