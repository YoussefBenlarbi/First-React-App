
import React from 'react';

// const root = document.getElementById('root');
// ReactDOM.render(
// 	<h1>Hello Goaat !</h1>,
// 	document.getElementById('root')
// );
function Entete() {
	return <h2 className="style1">Entete</h2>;
}
function Corps() {
	return <h2 className="style2">Corps</h2>;
}

class Footer extends React.Component {
	render() {
		return <div className="style3">Footer </div>;
	}
}


function App() {
	return (
		<React.Fragment>
			
      <Entete/>
      <Corps/>
      <Footer/>
		</React.Fragment>
	);
}

export default App;
