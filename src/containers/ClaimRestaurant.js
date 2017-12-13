import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle, TextField} from 'material-ui';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Header from '../components/Header'

var _ = require('lodash');

const style = {
	marginTop: 30
};

class ClaimRestaurant extends Component {

	state = {
		submitted: false,
		errorName: false,
		valueName: "",
		errorEmail: false,
		valueEmail: "",
		errorPhone: false,
		valuePhone: "",
		error: false
	};

	static propTypes = {
    	history: PropTypes.object.isRequired
  	};

  	handleSubmit = () => {

  		var error = false;

  		if(this.state.valueName == "") {error=true; this.setState({errorName: true});}
  		else {error=false; this.setState({errorName: false});}

  		if(this.state.valueEmail == "") {error=true; this.setState({errorEmail: true});}
  		else {error=false; this.setState({errorEmail: false});}

  		if(this.state.valuePhone == "") {error=true; this.setState({errorPhone: true});}
  		else {error=false; this.setState({errorPhone: false});}

  		if(!error) {
  			this.setState({submitted: true});
  		}
  		
  	}

	render() {
		
		console.log(this.props);

		return (
			<Grid>
			    <Row>
			    	<Col md={6} mdOffset={3}>
			    		<Header />
			    		<h3><small>Claim the restaurant:</small></h3>
			        	<h2>{this.props.match.params.name}</h2>
			        	<Divider />
			        	<br /><br />
			        	{
			        		!this.state.submitted ? 
			        		(
			        			<div>
				        			<h4>Enter your info to verify that you own this restaurant</h4>
						        	<TextField floatingLabelText="Name" fullWidth={true} errorText={this.state.errorName ? "This is required" : null} value={this.state.valueName} onChange={(e) => {this.setState({valueName: e.target.value})}} />
						        	<TextField floatingLabelText="Email" fullWidth={true} errorText={this.state.errorEmail ? "This is required" : null} value={this.state.valueEmail} onChange={(e) => {this.setState({valueEmail: e.target.value})}} />
						        	<TextField floatingLabelText="Phone" fullWidth={true} errorText={this.state.errorPhone ? "This is required" : null} value={this.state.valuePhone} onChange={(e) => {this.setState({valuePhone: e.target.value})}} />
						        	<RaisedButton label="Claim Restaurant" primary={true} style={style} onTouchTap={this.handleSubmit} />
						        </div>
			        		)
			        		:
			        		(
			        			<div>
				        			<h4>Thanks! We'll contact you shortly to verify that you own this restaurant.</h4>
						        </div>
			        		)
			        	}
			        	
		        	</Col>
			    </Row>
		  	</Grid>
		);
	}
}

export default ClaimRestaurant;