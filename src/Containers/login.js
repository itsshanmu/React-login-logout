import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.props =  props;
        this.state = {username:'',password:''}
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.isLogged = false;
    }

    handleOnchange = (e) =>{

      let name = e.target.name;
      let val = e.target.value;
      this.setState({[name]: val});

     if(this.state.username && this.state.password)
         this.isLogged = true;        
    }

    handleLogin = (e) =>{   
        if(!(this.state.username && this.state.password))   
                    alert('Please enter your credentials');
        
        this.props.loginState(this.isLogged);
    }

    handleReset = (e) =>{      
       document.getElementById('username').value = '';
       document.getElementById('password').value = '';
       this.setState({username:'',password:''});
       this.isLogged = false;     
       this.props.loginState(this.isLogged);
    }

	render(){ 
        const loginStyles = {			
            topMargin: {
                marginTop:30				
            },	
            leftMargin: {
                marginLeft:20				
            }	
        };

		return ( 

            <Container style={{backgroundColor: '#EBE9FF', marginTop:100, padding:50, borderRadius: 10}}>
				<Row>					
					<Col xs={4}/>

                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <h1 align='center' style={{color:'#1200D6',marginBottom:50}}>Login Here</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                            <label htmlFor="username" className="text-info">Username:</label><br/>
                            <input type="text" name="username" id="username" className="form-control"onChange={this.handleOnchange}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                            <label htmlFor="password" className="text-info">Password:</label><br/>
                            <input type="password" name="password" id="password" className="form-control" onChange={this.handleOnchange}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} style={loginStyles.topMargin}>
                            <Row>
                            <Col xs={6} >
                            <button  className="btn btn-info"  onClick={this.handleLogin}>Login</button>  
                            </Col>   
                            <Col xs={6} >
                            <button  style={loginStyles.leftMargin} className="btn btn-danger float-left" onClick={this.handleReset}>Reset</button>                           
                            </Col>                         
                            </Row>
                            </Col>
                        </Row>
                   </Col>

                  <Col xs={4}/>   
					
			  </Row>

            </Container>
		);
	}
}

export default Login;