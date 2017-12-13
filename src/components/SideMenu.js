import React, { Component, PropTypes } from 'react';
import {
  Link,
} from 'react-router-dom'
import {RaisedButton, Divider, TextField, Drawer, MenuItem} from 'material-ui';

class SideMenu extends Component {

	state = {
	};

	render() {
		console.log(this.props.menuSubPath);
		return (
			<Drawer open={true} docked={true}>
				<img src="http://pepperjellyapp.com/wp-content/themes/pepperjelly-landing-page/dist/img/logo.png" style={{margin: 20, width: 150}} />
				<Divider />
				<Link to="/dashboard/info"><MenuItem>Restaurant Info</MenuItem></Link>
				<Link to="/dashboard/marketing-banner"><MenuItem>Marketing Banner</MenuItem></Link>
				<Link to="/dashboard/push-notification"><MenuItem>Push Notification</MenuItem></Link>
				<Link to="/dashboard/photos"><MenuItem>Photos</MenuItem></Link>
				<Link to="/login"><MenuItem>Logout</MenuItem></Link>
		    </Drawer>
		);
	}
}
export default SideMenu