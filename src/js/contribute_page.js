import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class Contribute extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}

	constructor() {
		super();
		this.state = {
			preview: 'http://lacure.co/sites/default/files/empty.jpg'
		}
	}

	dataHandler(formData) {
		this.props.onSubmit(formDada);
	}

	dropHandler([file]) {
		this.setState({preview: file.preview})
	}


	render() {
		return (
			<div className="contribute-wrapper">
				<SSF onData={::this.dataHandler}>
					<div className="dropzone-wrapper"
						<Dropzone onDrop={::this.dropHandler}>
							<span className="drop-span">Drop Something Here</span>
							<input type="hidden" value={this.state.preview} name="photo"/>
							<img className="dropzone-img" src={this.state.preview}/>
						</Dropzone> 
					</div>
					<div className="title-input-div">
						<input type="text" value="Title" name="title"/>
					</div>
					<div className="solution-input-div">
						<input type="text" value="Solution" name="solution"/>
					</div>
					<button className="submit_btn">Submit</button>
				</SSF>
			</div>
		);
	}
}