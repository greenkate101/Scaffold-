var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

//var {Router, Route, hashHistory} = require('react-router'); other way to do lines 7-9. but not recommended

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');

var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}></Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));