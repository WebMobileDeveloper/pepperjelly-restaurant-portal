import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {RaisedButton, Divider, TextField, Drawer, MenuItem, SelectField} from 'material-ui';

const style = {
	marginTop: 30
};

class PushNotifications extends Component {

	state = {
		submitted: false,
		sendToValue: null
	};

  	handleSubmit = () => {
  		this.setState({submitted: true});
  	}

  	handleChangeSendToValue = (event, index, value) => {
  		this.setState({sendToValue: value})
  	}

	render() {
		return (
			<div>
			    <h3>Push Notification</h3>
			    <Divider />
				<TextField floatingLabelText="Push Notification Message" fullWidth={true} defaultValue="" />
				
				<SelectField
		          floatingLabelText="Send To People"
		          value={this.state.sendToValue}
		          onChange={this.handleChangeSendToValue}
		          fullWidth={true}
		        >
		          <MenuItem value={1} primaryText="In a 5 Mile Radius" />
		          <MenuItem value={3} primaryText="In a 10 Mile Radius" />
		          <MenuItem value={2} primaryText="Who Saved Your Restaurant" />
		          <MenuItem value={4} primaryText="Who Shared A Photo of Your Food" />
		        </SelectField>
		        <br />
				<RaisedButton label="Send" primary={true} style={style} onTouchTap={this.handleSubmit} />
			</div>
		);
	}
}

export default PushNotifications;