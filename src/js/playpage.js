import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class PlayPage extends Component {

//would image be fed by backend?


	static propTypes = {
		title: PropTypes.string.isRequired,
		img_url: PropTypes.string.isRequired,
		// guess: PropTypes.string.isRequired,
		onGuess: PropTypes.func.isRequired,
		solution: PropTypes.string.isRequired
	}

	dataHandler(){
		this.props.onGuess;
	 }

	render () {
		let {onGuess, title, img_url} = this.props;
		return (
			<div>
				<SSF onData={::this.dataHandler}>
					<h2>{title}</h2>
					<img src={img_url} name={img_url}/>
					<input type="text" name="guess">Take a guess!</input>
					<button>Submit</button>
				</SSF>
			</div>

		)

	}


}