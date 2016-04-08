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





renderStart();

