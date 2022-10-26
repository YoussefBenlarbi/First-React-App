import react from 'react';
class State extends react.Component {
	constructor(props) {
		super(props);
		this.state = {
			immatriculation: props.immatriculation,
			color: props.color,
			marque: props.marque,
			model: props.model,
		};
	}
	changerColor() {
		this.setState({
			color: ' Yellow',
		});
	}
	changerBrand() {
		this.setState({
			marque: ' Bugatti',
		});
	}
	render() {
		return (
			<div>
				<h3>etat immatriculation : {this.state.immatriculation}</h3>
				<h3>etat color :{this.state.color}</h3>
				<h3>etat marque :{this.state.marque}</h3>
				<h3>etat model :{this.state.model}</h3>
				<button onClick={() => this.changerColor()}>Change Color</button>
				<br></br> <br></br>
				<button onClick={() => this.changerBrand()}>Change Brand</button>
				<h3>###########################################</h3>
			</div>
		);
	}
}
export default State;
