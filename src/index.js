import React from "react"
import ReactDOM from "react-dom"
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import LandingPage from "./js/components/LandingPage"
import WholeApp from "./js/reducers/RootReducer"
const app = document.getElementById('app');


let initialState = {
	flight: "",
	flights: [],
}

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(
											WholeApp,
											initialState,
											window.devToolsExtension ? window.devToolsExtension() : f => f
										)

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={LandingPage}></Route>
			<Route path="index" component={LandingPage}>
				<IndexRoute component={LandingPage}></IndexRoute>
				<Route name="user" path="/user/:id" component={LandingPage}></Route>
			</Route>
			</Router>
	</Provider>, app);
