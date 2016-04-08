import React, {Component, PropTypes} from 'react';

export default class ImageList extends Component {
	static propTypes = {
		img_url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		onImgSelect: PropTypes.func.isRequired
	}

	getImage(user) {
	let {onImgSelect, title, img_url} = this.props;
	return (
		<div onClick={onImgSelect.bind(null, user)}>
			<h5>{title}</h5>
			<img className="img-list-unique" src={image_url}/>
		</div>
		);
	}

	render () {
		let {user, username, img_url} = this.props;
		return(
			<div className="img-list-wrapper">
				<h4>{username}</h4>
				<div>{img_url.map(::this.getImage)}</div>
			</div>
		);
	}
}