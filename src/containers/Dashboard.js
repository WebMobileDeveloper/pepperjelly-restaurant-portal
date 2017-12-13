import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {RaisedButton, Divider, TextField, Drawer, MenuItem} from 'material-ui';
import SideMenu from '../components/SideMenu'
import RestaurantInfo from './Dashboard/RestaurantInfo'
import PushNotifications from './Dashboard/PushNotifications'
import MarketingBanner from './Dashboard/MarketingBanner'
import Photos from './Dashboard/Photos'

const style = {
	marginTop: 30
};

class Dashboard extends Component {

	state = {
		submitted: false
	};

	static propTypes = {
    	history: PropTypes.object.isRequired
  	};

  	handleSubmit = () => {
  		this.setState({submitted: true});
  	}

  	getDashboardSubPage() {
  		switch(this.props.match.params.subPath) {
			case "info":
				return <RestaurantInfo />;
			case "marketing-banner": 
				return <MarketingBanner />;
			case "push-notification":
				return <PushNotifications />;
			case "photos":
				return <Photos />;
			default:
				return <RestaurantInfo />;
		}
  	}

	render() {

		return (
			<Grid>
			    <Row>
			    	<Col md={6} mdOffset={3}>
	        			<SideMenu menuSubPath={this.props.match.params.subPath} />
				        <br />
				        {this.getDashboardSubPage()}
		        	</Col>
			    </Row>
		  	</Grid>
		);
	}
}

export default Dashboard;