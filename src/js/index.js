// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import Startscreen from './Startscreen';
import Account from './Account';
import Contribute from './contribute_page';
import Playpage from './playpage';
import { ajax } from 'jquery';
import Dashboard from './Dashboard';

//let loggedInUser = null;

function renderLogin (x) {
	console.log(x => x);
}

let renderStart = (user) => ReactDOM.render(
	<Startscreen user={user} onLogin={renderLogin}/>
	, document.querySelector('.app')
	);

// let renderStart = () => {
// 	ajax('http://ironpics.herokuapp.com')
	//ajax({url}).then(data => {
		//ReactDOM.render(
	//<Startscreen onCreate={createandRender}/>
//, document.querySelector('.app')
	//);
//});
//};

//let data = new formData();
//data.append('username',)
//data.append('email',)
//data.append('password_digest',)
//data.append('image_url',)
//data.append('solution',)
//data.append('title',)
//data.append('guess',)
//data.append('points',)


// 	ajax({
// 		url:'http://ironpics.herokuapp.com/registrations',
// 		type: 'POST'
// 	//headers: {
// 		//X-access-token: man,
// 		//X-girl: boy,
// 		//}
// 		data: data,
// 		cache: false,
// 		dataType: 'json',
// 		processData: false,
// 		contentType: false
// }).then(() => {
// 	}renderStart();
// );
// ReactDOM.render(
// 		<Account/> 		, 
// 		document.querySelector('.app')
//  		);






// let createandRender = (player) => {
// 	let data = new playerData();
// data.append('username', player.name);
// data.append('email', player.email);
// data.append('password', player.password);

// ajax({
// url:'http://ironpics.herokuapp.com',
// 	type: 'POST',
// 	//headers: {
// 		//X-access-token: man,
// 		//X-girl: boy,
// 	//}
// 	data: form,
// 	cache: false,
// 	dataType: 'json',
// 	processData: false,
// 	contentType: false
// }).then(() => {
// 	renderStart();
// );
// 	ReactDOM.render(
// 		<Account/>
// 		, document.querySelector('.app')
// 		);
// };
renderStart();

