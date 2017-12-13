import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {RaisedButton, Divider, TextField, Drawer, MenuItem, FlatButton, GridList, GridTile, IconButton } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/action/delete';

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

const tilesData = [
  {
    img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2017/01/DSCF0037.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2017/01/DSCF0037.jpg?v1',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2017/01/DSCF0037.jpg?v2',
    title: 'Camera',
    author: 'Danson67',
  },
];

var reader = new FileReader();

class Photos extends Component {

	state = {
		submitted: false,
		imagePath: ""
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
				<h3>Photos</h3>
			    <Divider />
			    <br />

			    <h5>Add a Photo</h5>
			    <RaisedButton
					label="Pick an Image"
					labelPosition="before"
					style={styles.uploadButton}
					containerElement="label"
				>
					<input type="file" style={styles.uploadInput} accept="image/*" onChange={this.handleChangedFile}  />
				</RaisedButton>
				{
					this.state.imagePath != "" ? (
						<div>
							<br />
							<img src={this.state.imagePath} width="100%" />

							<TextField floatingLabelText="Add a Description" fullWidth={true} />
							<RaisedButton
								label="Add Photo"
								labelPosition="before"
								style={styles.uploadButton}
								containerElement="label"
								primary={true}
							/>
							<br />

						</div>

					) : <div />
				}
			    
				<br />
				<br />

				<h5>Current Photos</h5>

				<GridList
			      cellHeight={180}
			      style={styles.gridList}
			    >
			      {tilesData.map((tile) => (
			        <GridTile
			          key={tile.img}
			          title={tile.title}
			          subtitle={<span>by <b>{tile.author}</b></span>}
			          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
			        >
			          <img src={tile.img} />
			        </GridTile>
			      ))}
			    </GridList>

			    <br />
				<br />
				<br />

			</div>
		);
	}
}

export default Photos;