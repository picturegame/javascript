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
		formData.image = this.file;
		this.props.onSubmit(formData);
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
		this.file = file;
	}


	render() {
		return (
			<div className="contribute-wrapper">
				<SSF onData={::this.dataHandler}>
					<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
					<div className="dropzone-wrapper">
						<Dropzone onDrop={::this.dropHandler}>
							<span className="drop-span">Drop Something Here</span>
							<img className="dropzone-img" src={this.state.preview}/>
						</Dropzone> 
					</div>
					<div className="title-input-div">
						<input type="text" defaultValue="Title" name="title"/>
					</div>
					<div className="solution-input-div">
						<input type="text" defaultValue="Solution" name="solution"/>
					</div>
					<button className="submit_btn">Submit</button>
				</SSF>
			</div>
		);
	}
}