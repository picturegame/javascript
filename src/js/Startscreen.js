import React, {Component, PropTypes} from 'react';

export default class Startscreen extends Component {
	static propTypes = {
		//onLogin: PropTypes.func.isRequired
		onCreate: PropTypes.func.isRequired
		//onPlay: PropTypes.func.isRequired
		//onCont: PropTypes.func.isRequired


	}

	//clickHandler



	render () {
		let {onCreate} = this.props;

		return (
			<div className="start-page">
				<h1>Instructions</h1>
					<p>Chupa chups gummi bears liquorice jelly tiramisu. 
					Marshmallow topping macaroon gingerbread. Cheesecake apple pie chocolate bar. 
					Sugar plum apple pie cotton candy.</p>
				<div className="on-play">
					<button onClick={onPlay}>PLAY</button>
				</div>
				<div className="on-cont">
					<button onClick={onCont}>Contribute</button>
				</div>
				<div className="on-login">
					<button onClick={onLogin}>Login</button>
				</div>
				<div className="on-create">
					<button onClick={onCreate}>Create Account</button>
				</div>
			</div>




			)
	}
}

