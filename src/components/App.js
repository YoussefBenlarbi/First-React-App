
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
	const modules1 = ['POO', 'React', 'Laravel'] ;
	const modules2 = ['SQL', 'Back End' , 'Laravel'] ;
	const modules3 = ['POO', 'Laravel','Mysql'] ;
	return (
		<React.Fragment>
		<Stagiaire id="1" prenom="Zouhhair"  nom="respo" modules={modules1} />	
		<Stagiaire id="2" prenom="HAMID"  nom="BLED" modules={modules2}/>	
		<Stagiaire id="3" prenom="KHALID"  nom="CHEIKH" modules={modules3}/>	
		</React.Fragment>
	);
}

export default App;
