import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class Account extends Component {
	static propTypes = {
		// username: PropTypes.string.isRequired,
		// email: PropTypes.string.isRequired,
		// password: PropTypes.string.isRequired,
		onSave: PropTypes.func.isRequired
	}

	dataHandler(formData) {
		// data.file = this.file;
		this.props.onSave(formData);
	}





	render () {
		return (
			<div className="formView">
				<SSF onData={::this.dataHandler}>
					<div>
						<label>
						 Username
						<input type="text" name="username"/>
						</label>
					</div>
					<div>
						<label>
						 Email
						<input type="text" name="email"/>
						</label>
					</div>
					<div>
						<label>
						Password
						<input type="hidden" name="password"/>
						</label>
					</div>
					<button>Submit</button>
				</SSF>
			</div>
			)
	}
}