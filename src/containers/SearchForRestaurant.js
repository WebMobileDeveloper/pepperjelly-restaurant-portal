import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Header from '../components/Header'
var _ = require('lodash');
var algoliasearch = require('algoliasearch');
var client = algoliasearch('48EUWY9NWN', '1dce9ee52d4baaf5e64d24e3892cca87');

const style = {
  margin: 30,
};

class SearchForRestaurant extends Component {

	state = {
		dataSource: [],
	};

	static propTypes = {
    	history: PropTypes.object.isRequired
  	};

	handleUpdateInput = (value) => {
		var index = client.initIndex('pepperjelly');
		index.search(value, (err, content) => {
			console.log(content.hits);
			console.log(_.map(content.hits, "name"));

		  	this.setState({
				dataSource: content.hits.map((restaurant) => { return {text: restaurant.name, value: restaurant._id} })
			});
		});
	}

	handleSelection = (chosenRestaurant, index) => {
		console.log(chosenRestaurant, index);
		this.props.history.push('/claim/' + chosenRestaurant.value + '/' + chosenRestaurant.text);
	}

	render() {
		return (
			<Grid>
			    <Row>
			    	<Col md={6} mdOffset={3}>
			    		<Header />
			      		<AutoComplete
			      			filter={AutoComplete.noFilter}
							hintText="Search for your restaurant"
							dataSource={this.state.dataSource}
							onUpdateInput={this.handleUpdateInput}
							floatingLabelText="Claim your restaurant"
							fullWidth={true}
							onNewRequest={this.handleSelection}
				        />
			        		
		        	</Col>
			    </Row>
		  	</Grid>
		);
	}
}

export default SearchForRestaurant;