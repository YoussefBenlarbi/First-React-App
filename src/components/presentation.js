function Presentation(props){
    const {nom,prenom,diplomes,specialite} = props;
    return(
        <div>
            <h2>
                {nom} {prenom} 
            </h2>
            <ul>
            {/* {diplomes}.map((element,index)=>()) */}

            </ul>
        </div>
    )
}
export default Presentation;
