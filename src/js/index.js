// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import Startscreen from './Startscreen';
import Account from './Account';
import Contribute from './contribute_page';
import PlayPage from './playpage';
import { ajax } from 'jquery';
import Dashboard from './Dashboard';
import ImageList from './ImageList';




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

<<<<<<< HEAD
=======
//renderStart();

renderImageList();




<<<<<<< HEAD
=======
<<<<<<< HEAD
renderStart();

=======


>>>>>>> 30623a6181b0a556ae3cf109f082396308b4cad4
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





<<<<<<< HEAD
=======
let renderPlaypage () => {
	ReactDOM.render(
		<PlayPage onGuess={help}/>,
		document.querySelector('.app')
		);
}



>>>>>>> 30623a6181b0a556ae3cf109f082396308b4cad4
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
<<<<<<< HEAD
renderStart();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 30623a6181b0a556ae3cf109f082396308b4cad4
>>>>>>> dd74c5edb752a9477d7467e7d91fdcf5262c1cce


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0b1d6ed3140a9b7cb98da19c7f53288d16fcb02
>>>>>>> 450a9b5239ec517d3a3bab93ded1367aec870800
=======
>>>>>>> 30623a6181b0a556ae3cf109f082396308b4cad4


renderStart();

