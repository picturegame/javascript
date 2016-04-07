// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import Startscreen from './Startscreen';
import Account from './Account';
import Contribute from './contribute_page';
import Playpage from './playpage';
import { ajax } from 'jquery';
import Dashboard from './Dashboard';
import ImageList from './ImageList';


<<<<<<< HEAD
=======

>>>>>>> 82ee1a1fa2fb894e8b20f4b4c1fc52ba12babf57
//let loggedInUser = null;

function renderLogin () {
	console.log("hi");
}

function saveUser () {
	ajax({
		url: 'http://ironpics.herokuapp.com/registrations',
		type: 'POST',
		data: {
			username: "username",
			password: "password",
			email: "email"
		},
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( () => {
		renderDashboard(); 
		});
		}

let renderAccount = () => ReactDOM.render (
	<Account onSave={renderDashboard}/>
	, document.querySelector('.app')
	);

let renderStart = (user) => ReactDOM.render(
	<Startscreen user={user} onLogin={renderLogin} onCreate={renderAccount}/>
	, document.querySelector('.app')
	);


let renderPlayPage = () => ReactDOM.render (
	<PlayPage onGuess={renderDashboard}/>
	, document.querySelector('.app')
	);

let renderContribute = () => ReactDOM.render (
	<Contribute onSubmit={renderImageList}/>
	, document.querySelector('.app')
	);

let renderImageList = () => ReactDOM.render (
	<ImageList onImgSelect={PlayPage}/>
	, document.querySelector('.app')
	);

let renderDashboard = () => ReactDOM.render (
	<Dashboard onPlay={renderImageList} onCont={renderContribute}/>
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


//ajax({
//url:'',
	//type: 'POST'
	//headers: {
		//X-access-token: man,
		//X-girl: boy,
	//}
	//data: data,
	//cache: false,
	//dataType: 'json',
	//processData: false,
	//contentType: false
//}).then(() => {
	//}renderStart();
//);





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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d0b1d6ed3140a9b7cb98da19c7f53288d16fcb02
=======
=======
>>>>>>> 9e9ddf5e7819c80cd2518812ea682dd21e2c36cc

<<<<<<< HEAD
=======
>>>>>>> d0b1d6ed3140a9b7cb98da19c7f53288d16fcb02
>>>>>>> 450a9b5239ec517d3a3bab93ded1367aec870800

>>>>>>> 82ee1a1fa2fb894e8b20f4b4c1fc52ba12babf57
