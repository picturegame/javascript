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
			<div className="orange-div"></div>
			<div className="blue-div"></div>
			<div className="start-bg"></div>
				<SSF onData={::this.dataHandler}>
					<h6 className="instructions-title">Instructions</h6>
					<div className="instructions-div">
					<p className="instructions">This game is a one-player game.  A player signs into the Iron Pics website.  Once a player is signed into the website, he/she can choose to contribute to or to play the game.<br/><br/>
  
					<b>Contribute:</b> A player can contribute to the game by uploading a picture and labeling the picture with a unique caption.  Press the submit button to add the picture to the choices available for play.<br/><br/>

					<b>Play:</b> A player can play the game by clicking on a picture from the list provided.  The player will be able to guess the caption for that picture in the space provided.  If the player guesses the caption correctly, he/she wins one point.  If the player does not guess the caption correctly, he/she’s guess is logged in the “Guess List” so that other players can see what has been guessed previously.
					<br/><br/>A player must be signed in with an account to play or contribute to this game.</p>
					</div>
					<h6 className="iron-pics-title">Iron Pics.</h6>
					<div className="loginInfo">
						<label className="username-label">
						Username:
						<input className="username-login" type="text" name="username"/>
						</label>
						<label className="password-label">
						Password:
						<input className="password-login" type="password" name="password"/>
						</label>
					</div>
					<div>
						<button className="on-login">Login</button>
					</div>
					<div>
						<a className="on-create" onClick={onCreate}>Create Account</a>
					</div>
				</SSF>
			</div>

			)
	}
}

