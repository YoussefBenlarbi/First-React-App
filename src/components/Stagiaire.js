function Stagiaire(props) {
	const id = props.id ;
	const nom = props.nom ;
	const prenom = props.prenom ;
	const modules = props.modules ;
	return (
		<ul>
			<li>ID : {id}</li>
			<li>Nom : {nom.toUpperCase()}</li>
			<li>Prenom : {prenom.toUpperCase()}</li>
			<li>
				<h3>Listes Modules : </h3>
				<ul>
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
