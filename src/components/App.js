import './../Style/App.css';
import React from 'react';
import Stagiaire from './Stagiaire';

// const root = document.getElementById('root');
// ReactDOM.render(
// 	<h1>Hello Goaat !</h1>,
// 	document.getElementById('root')
// );
// function Entete() {
// 	return <h2 className="style1">Entete</h2>;
// }
// function Corps() {
// 	return <h2 className="style2">Corps</h2>;
// }

// class Footer extends React.Component {
// 	render() {
// 		return <div className="style3">Footer </div>;
// 	}
// }

// component
// {/* <Entete/>
//       <Corps/>
//       <Footer/> */}

function App() {
	const listeStagiaire = [
		{
			id: 1,
			prenom: 'Zouhhair',
			nom: 'Respo',
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
			modules: [
				{ nomModule: 'SQL', moyenne: 20, coe: 2 },
				{ nomModule: 'Back End', moyenne: 19, coe: 2 },
				{ nomModule: 'Laravel', moyenne: 17, coe: 3 },
			],
		},
	];
	// const modules1 = ['POO', 'React', 'Laravel'] ;
	// const modules2 = ['SQL', 'Back End' , 'Laravel'] ;
	// const modules3 = ['POO', 'Laravel','Mysql'] ;
	return (
		<ul>
			{listeStagiaire.map((element, index) => (
				<li className="UlStyle" key={index}>
					<Stagiaire
						id={element.id}
						nom={element.nom}
						prenom={element.prenom}
						modules={element.modules}
					/>
				</li>
			))}
		</ul>
	);
}

export default App;
