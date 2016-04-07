import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class Startscreen extends Component {
	static propTypes = {		
		onLogin: PropTypes.func.isRequired,
		onCreate: PropTypes.func.isRequired
	}

	//clickHandler

	dataHandler(apiData) {
		this.props.onLogin(apiData);
	}



	render () {
		let {onCreate, onLogin} = this.props;

		return (
			<div className="start-page">
				<SSF onData={::this.dataHandler}>
					<div className="loginInfo">
						<label>
						Username:
						<input type="text" name="username"/>
						</label>
						<label>
						Password:
						<input type="password" name="password"/>
						</label>
					</div>
					<div className="on-login">
						<button>Login</button>
					</div>
					<div className="on-create">
						<a onClick={onCreate}>Create Account</a>
					</div>
				</SSF>
			</div>

			)
	}
}

