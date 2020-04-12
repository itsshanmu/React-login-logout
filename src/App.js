import React from 'react'; 
import './App.css';

import Login from './Containers/login';
import Home from './Containers/home';

class App extends React.Component {

	constructor(props){
		super(props)
		this.props = props;
		this.state = {isLoggedIn:false}
		this.checkLogin = this.checkLogin.bind(this);
	}

	checkLogin = (val) =>{		
		this.setState({isLoggedIn: val});	
	}

	render(){
		return (			
				<div>	
					{this.state.isLoggedIn ?  <Home loginState={this.checkLogin}/> : <Login loginState={this.checkLogin}/>}
				</div>
		)
	}
}

export default App;