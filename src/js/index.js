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
//let loggedInUser = null;
>>>>>>> 83d96a3cc2d0a519f03d25a3ec586c41baf19cb3

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

//renderStart();

renderImageList();




<<<<<<< HEAD
renderStart();

=======


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





let renderPlaypage () => {
	ReactDOM.render(
		<PlayPage onGuess={help}/>,
		document.querySelector('.app')
		);
}



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

>>>>>>> 83d96a3cc2d0a519f03d25a3ec586c41baf19cb3
