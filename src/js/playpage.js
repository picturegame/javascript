import React, {Component, PropTypes} from 'react';

export default class PlayPage extends Component {

//would image be fed by backend?


	static propTypes = {
		title: PropTypes.string.isRequired,
//		img_url: 
		guess: PropTypes.string.isRequired,
	}

	// onGuess(){
	// 	return 
	// }

	render () {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<img src={} value={} name={}/>
				<span>Guess the caption! value={this.props.guess}</span>
				<button onClick="onGuess">Submit</button>
			</div>

		)

	}


}