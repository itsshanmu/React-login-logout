import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


class Home extends React.Component {

	constructor(props){
		super(props)
		this.props = props;	
		this.state = {bankName : 'ABC', accNo:'100000001', branch:'Chennai', amount:'52664', totalDep:'60000', fd:'1000000', rd:'5000'};	
		this.handleLogout = this.handleLogout.bind(this);
		
		
	}	

	handleLogout = () =>{		
		this.props.loginState(false);
	}

	render(){

		const homeStyles = {			
			topMargin: {
				marginTop:50				
			},
			headRow:{
				backgroundColor: '#5244E7',
				marginTop:20,
				padding : 5	,
				borderTopRightRadius: 10, 
				borderTopLeftRadius: 10  ,
				color:'#ffffff'
			},
			contentRow:{
				marginTop:40
			}		
		};

			return (

				<Container style={{backgroundColor: '#EBE9FF',height:'600px', borderRadius: 10}}>
					<Row style={homeStyles.headRow} >					
						<Col xs={10}><p class="font-weight-bold">Welcome to {this.state.bankName} Bank</p></Col>
						<Col xs={2}><AccountCircleIcon/><button  className="btn btn-danger float-right"  onClick={this.handleLogout}>Logout</button></Col>
					</Row>
					<Row style={homeStyles.contentRow}>
				    <Col xs={3}>Account Summary
						<Accordion>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="0">
							   Savings  <KeyboardArrowDownIcon className="float-right"/>
							</Accordion.Toggle>


							<Accordion.Collapse eventKey="0">
							  <Card.Body>Open FD</Card.Body>							
							</Accordion.Collapse>

							<Accordion.Collapse eventKey="0">
							<Card.Body>Open RD</Card.Body>							
							</Accordion.Collapse>

							<Accordion.Collapse eventKey="0">
							<Card.Body>View Deposits</Card.Body>							
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
							   Funds Transfer  <KeyboardArrowDownIcon className="float-right"/>
							</Accordion.Toggle>

							<Accordion.Collapse eventKey="1">
							<Card.Body>View Payee</Card.Body>
							</Accordion.Collapse>
							<Accordion.Collapse eventKey="1">
							<Card.Body>Transfer</Card.Body>
							</Accordion.Collapse>
						</Card>
						</Accordion>
					</Col>

					<Col xs={9} >
					
					    <label>Savings Account</label>
							<Card>
							 <Card.Body>
								<Row>					
									<Col xs={4} ><p class="font-weight-bold">Account Number</p></Col>
									<Col xs={4}><p class="font-weight-bold">Branch</p></Col>
									<Col xs={4}><p class="font-weight-bold">Amount</p></Col>									
								</Row>							
								<Row>					
									<Col xs={4}>{this.state.accNo}</Col>
									<Col xs={4}>{this.state.branch}</Col>
									<Col xs={4}>{this.state.amount}</Col>									
								</Row>
				             </Card.Body>
							</Card>

							<label style={homeStyles.topMargin}>Deposits</label><label>Total Deposits : {' $ '+this.state.totalDep}</label>
							<Card>
							<Card.Body>
							<Row>					
									<Col xs={8}>
										<Row>	
											<Col xs={6}><p class="font-weight-bold">Fixed Deposits</p></Col>
											<Col xs={6}><p class="font-weight-bold">Recurring Deposits</p></Col>
										</Row>
										<Row>	
											<Col xs={6}>{this.state.fd}</Col>
											<Col xs={6}>{this.state.rd}</Col>
										</Row>
									</Col>

									<Col xs={4}> <Nav.Link>View All Deposits</Nav.Link></Col>
																
								</Row>							
								
							</Card.Body>
							</Card>
					
					</Col>
					
				</Row>
				</Container>

		)
	}
}

export default Home;