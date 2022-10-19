
function Stagiaire (){
    const id =1 ;
    const nom ="Errahmani" ;
    const prenom ='maryam' ;
    const modules =["POO","React","Laravel","SQL"];
    return (<ul>
        <li>ID : {id}</li>
        <li>Nom : {nom.toUpperCase()}</li>
        <li>Prenom : {prenom.toUpperCase()}</li>
        <li>Modules : {modules[0]} {modules[1].toUpperCase()} {modules[2].toUpperCase()} {modules[3]}</li>        
    </ul>)
}

export default Stagiaire ;