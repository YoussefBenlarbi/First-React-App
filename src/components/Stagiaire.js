function Stagiaire() {
	const id = 1;
	const nom = 'Errahmani';
	const prenom = 'maryam';
	const modules = ['POO', 'React', 'Laravel', 'SQL', 'Back End'];
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
					{modules.map((element) => 
						<li>{element}</li>
					)}
				</ul>
			</li>
		</ul>
	);
}

export default Stagiaire;
