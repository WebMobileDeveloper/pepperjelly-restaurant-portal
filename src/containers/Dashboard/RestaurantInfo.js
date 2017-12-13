import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {RaisedButton, Divider, TextField, Drawer, MenuItem} from 'material-ui';

const style = {
	marginTop: 30
};

class RestaurantInfo extends Component {

	state = {
		submitted: false,
		valueName: "",
		valuePhone: "",
		valueAddress: "",
		valueHoursMon: "",
		valueHoursTue: "",
		valueHoursWed: "",
		valueHoursThu: "",
		valueHoursFri: "",
		valueHoursSat: "",
		valueHoursSun: "",
	};

  	handleSubmit = () => {
  		this.setState({submitted: true});
  	}

	render() {
		return (
			<div>
			    <h3>Restaurant Info</h3>
			    <Divider />
				<TextField floatingLabelText="Name" fullWidth={true} defaultValue="" value={this.state.valueName} onChange={(e) => {this.setState({valueName: e.target.value})}}  />
				<TextField floatingLabelText="Phone" fullWidth={true} value={this.state.valuePhone} onChange={(e) => {this.setState({valuePhone: e.target.value})}}  />
				<TextField floatingLabelText="Address" fullWidth={true} value={this.state.valueAddress} onChange={(e) => {this.setState({valueAddress: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Monday" fullWidth={true} value={this.state.valueHoursMon} onChange={(e) => {this.setState({valueHoursMon: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Tuesday" fullWidth={true} value={this.state.valueHoursTue} onChange={(e) => {this.setState({valueHoursTue: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Wednesday" fullWidth={true} value={this.state.valueHoursWed} onChange={(e) => {this.setState({valueHoursWed: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Thursday" fullWidth={true} value={this.state.valueHoursThu} onChange={(e) => {this.setState({valueHoursThu: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Friday" fullWidth={true} value={this.state.valueHoursFri} onChange={(e) => {this.setState({valueHoursFri: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Saturday" fullWidth={true} value={this.state.valueHoursSat} onChange={(e) => {this.setState({valueHoursSat: e.target.value})}}  />
				<TextField floatingLabelText="Opening Hours Sunday" fullWidth={true} value={this.state.valueHoursSun} onChange={(e) => {this.setState({valueHoursSun: e.target.value})}}  />
				
				<RaisedButton label="Save" primary={true} style={style} onTouchTap={this.handleSubmit} />
			</div>
		);
	}
}

export default RestaurantInfo;