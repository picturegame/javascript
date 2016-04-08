import React, {Component, PropTypes} from 'react';

export default class ImageList extends Component {
	static propTypes = {
		user: PropTypes.arrayOf(PropTypes.shape ({
			img_url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			onImgSelect: PropTypes.func.isRequired
			})).isRequired,
			username: PropTypes.string.isRequired
	}

	getImage(user) {
	let {onImgSelect, title, img_url} = this.props;
	return (
		<div onClick={onImgSelect.bind(null, user)}>
			<h5>{user.title}</h5>
			<img className="img-list-unique" src={user.image_url}/>
		</div>
		);
	}

	render () {
		let { username, img_url} = this.props;
		return(
			<div className="img-list-wrapper">
				<h4>{username}</h4>
				<div>{user.map(::this.getImage)}</div>
			</div>
		);
	}
}