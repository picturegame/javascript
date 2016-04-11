import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class Account extends Component {
	static propTypes = {
		// username: PropTypes.string.isRequired,
		// email: PropTypes.string.isRequired,
		// password: PropTypes.string.isRequired,
		onSave: PropTypes.func.isRequired,
		renderStart: PropTypes.func.isRequired
}

	dataHandler(formData) {
		// data.file = this.file;
		this.props.onSave(formData);
	}





	render () {
		let { renderStart } = this.props;
		return (
			<div className="formView">
				<SSF onData={::this.dataHandler}>
					<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
					<div className="whoisyou">
						<label>
						 Username
						<input type="text" name="username"/>
						</label>
					</div>
					<div className="whereisyou">
						<label>
						 Email
						<input type="text" name="email"/>
						</label>
					</div>
					<div className="shhh">
						<label>
						Password
						<input type="password" name="password"/>
						</label>
					</div>
					<button>Submit</button>
				</SSF>
			</div>
			)
	}
}
