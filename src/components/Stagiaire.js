import './../Style/stagiaire.css';
import Module from './module';
function Stagiaire({ id, nom, prenom, modules }) {
	// const id = props.id ;
	// const nom = props.nom ;
	// const prenom = props.prenom ;
	// const modules = props.modules ;

	// desruction Object :
	// const {id,nom,prenom,modules} = props ;

	// const newArr = modules.map();
	// function test(Arr){
	// 	let n ;
	// 	for (let i = 0; i < Arr.length; i++) {
	// 		let total = Arr.moyenne[i] *  Arr.coe[i] ;
	// 		n += total+ n ;

	// 	  }
	// 	  return n ;
	// }
	// console.log(test(newArr)) ;
// Somme de moyenne * coeffician 
	const modulesMoyenne = modules
		.map((element) => element.moyenne * element.coe)
		.reduce(function (total, n) {
			return total + n;
		}, 0);
		// Somme de coeffician 
	const Sommeceo = modules
	.map((element) =>  element.coe)
	.reduce(function (total2, n) {
		return total2 + n;
	}, 0);
	// console.log(modules.length);
	console.log(modulesMoyenne);
	return (
		<ul className="style1">
			<li>ID : {id}</li>
			<li>Nom : {nom.toUpperCase()}</li>
			<li>Prenom : {prenom.toUpperCase()}</li>

			<li>
				<h3>Listes Modules : </h3>
				<ul className="style2">
					{/* {modules.map(function (element) {
						return <li>{element}</li>;
					})} */}
					{modules.map((element, index) => (
						<Module
							key={index}
							nomModule={element.nomModule}
							moyenne={element.moyenne}
							coe ={element.coe}
						/>
					))}
				</ul>
			</li>
			
			<li>moyenne de module : {modulesMoyenne / Sommeceo}</li>
		</ul>
	);
}

export default Stagiaire;
