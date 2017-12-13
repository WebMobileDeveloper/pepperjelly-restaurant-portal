import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {RaisedButton, Divider, TextField, Drawer, MenuItem, Subheader} from 'material-ui';
var FileInput = require('react-file-input');

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {

    overflowY: 'auto',
  },

};

var reader = new FileReader();

class MarketingBanner extends Component {

	state = {
		submitted: false,
		imagePath: "",
		currentImage: null
	};

  	handleSubmit = () => {
  		this.setState({submitted: true});
  	}

  	handleChangedFile = (event) => {
  		console.log('Selected file:', event.target.files[0]);

  		reader.onload = function (e) {
            this.setState({imagePath: e.target.result});
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
  	}

	render() {
		return (
			<div>
				<h3>Marketing Banner</h3>
			    <Divider />
			    <br />
			    {
			    	this.state.currentImage ? (
			    		<div>
				    		<h5>Current Banner Image</h5>
						    <img src={this.state.imagePath} width="100%" />
						    <br />
						    <br />
					    </div>
			    	) : <div />
			    }
			    
			    <h5>{this.state.currentImage ? "Replace" : "Upload a"} Banner Image</h5>

			    <RaisedButton
					label="Pick an Image"
					labelPosition="before"
					style={styles.uploadButton}
					containerElement="label"
				>

					<input id="upload" ref="upload" type="file" accept="image/*" onChange={this.handleChangedFile} style={styles.uploadInput} />

				</RaisedButton>
				<h4><small>Image should be 320x50px</small></h4>

				<br /><br />

				{
					this.state.imagePath != "" ? (
						<div>
						<img src={this.state.imagePath} width="100%" />
						<br />
						<br />
						<RaisedButton
							label="Upload & Save"
							labelPosition="before"
							style={styles.uploadButton}
							containerElement="label"
							primary = {true}
						/>
						</div>

					) : <div />
				}

			</div>
		);
	}
}

export default MarketingBanner;