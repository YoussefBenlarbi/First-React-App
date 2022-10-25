function Module({nomModule,moyenne,coe}){
    // const {nomModule} = props ;
    return (
        <li >{nomModule} {" : "} {moyenne}{"  - coe : "} {coe} </li>
    )
}

export default Module;