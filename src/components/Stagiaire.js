import './../Style/stagiaire.css' ;
function Stagiaire({id,nom,prenom,modules}) {
	// const id = props.id ;
	// const nom = props.nom ;
	// const prenom = props.prenom ;
	// const modules = props.modules ;

	// desruction Object :
	// const {id,nom,prenom,modules} = props ; 
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
						<li key={index}>{element} </li>
					))}
				</ul>
			</li>
		</ul>
	);
}

export default Stagiaire;
