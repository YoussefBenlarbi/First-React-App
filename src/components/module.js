function Module({nomModule,moyenne,coe}){
    // const {nomModule} = props ;
    return (
        <li >{nomModule} {" : "} {moyenne}{" / Coefficient: "} {coe} </li>
    )
}

export default Module;