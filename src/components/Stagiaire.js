function Stagiaire(props) {
	return (
		<ul>
			<li>ID : {props.id}</li>
			<li>Nom : {props.nom.toUpperCase()}</li>
			<li>Prenom : {props.prenom.toUpperCase()}</li>
			<li>
				<h3>Listes Modules : </h3>
				<ul>
					{/* {modules.map(function (element) {
						return <li>{element}</li>;
					})} */}
					{props.modules.map((element, index) => (
						<li key={index}>{element} </li>
					))}
				</ul>
			</li>
		</ul>
	);
}

export default Stagiaire;
