import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {RaisedButton, Divider, TextField} from 'material-ui';
import Header from '../components/Header'


const style = {
	marginTop: 30
};

class SignIn extends Component {

	state = {
		submitted: false,
		emailValue: "",
		errorEmail: false,
		passwordValue: "",
		errorPassword: false
	};

	static propTypes = {
    	history: PropTypes.object.isRequired
  	};

  	handleSubmit = () => {
  		
  		if(this.state.emailValue == "") this.setState({errorEmail: true})
  		else this.setState({errorEmail: false})

  		if(this.state.passwordValue == "") this.setState({errorPassword: true})
  		else this.setState({errorPassword: false})

  		if(this.state.passwordValue != "" && this.state.emailValue != "") {
  			this.props.history.push('/dashboard');
  		}
  	}

	render() {
		return (
			<Grid>
			    <Row>
			    	<Col md={4} mdOffset={4}>
			    		<Header />
	        			<h2>Sign In</h2>
			        	<TextField floatingLabelText="Email" fullWidth={true} errorText={this.state.errorEmail ? "This is required" : null} value={this.state.emailValue} onChange={(e) => {this.setState({emailValue: e.target.value})}} />
			        	<TextField floatingLabelText="Password" fullWidth={true} type="password" errorText={this.state.errorPassword ? "This is required" : null} value={this.state.passwordValue} onChange={(e) => {this.setState({passwordValue: e.target.value})}} />
			        	<RaisedButton label="Sign in" primary={true} style={style} onTouchTap={this.handleSubmit} />
		        	</Col>
			    </Row>
		  	</Grid>
		);
	}
}

export default SignIn;