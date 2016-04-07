import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class PlayPage extends Component {

//would image be fed by backend?


	static propTypes = {
		title: PropTypes.string.isRequired,
//		img_url: 
		guess: PropTypes.string.isRequired,
		onGuess: PropTypes.func.isRequired,
		solution: PropTypes.string.isRequired
	}

	dataHandler(){
		this.props.onGuess;
	 }

	render () {
		let {onGuess, title} = this.props;
		return (
			<div>
				<SSF onData={::this.dataHandler}
					<h2>{title}</h2>
					<img src="{#}" value="{#}" name="{#}"/>
					<span value={this.props.guess}>Guess the caption! </span>
					<button>Submit</button>
				</SSF>
			</div>

		)

	}


}