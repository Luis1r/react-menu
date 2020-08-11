import React, { Component } from 'react';
import CenMenu from './components/menu/CenMenu';
//Import all needed Components for changing pages
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import logo from './logo.png';
//Pages
import MainPage from "./pages/index"; ///< index.js will be automatically imported 
//And render that route with the MainPage component for the root path /
import NotFoundPage from "./pages/404";
import UploadPage from "./pages/myUploads";
import NodePage from "./pages/myNode";
import AboutUsPage from "./pages/aboutUs";



class App extends Component {
    render() {
        let isLogin = false;
        let links;
        if (isLogin) {
            links = [
                { label: 'Home', link: './', active: true },
                { label: 'About', link: './aboutUs' },
                { label: 'userName', link: './myNode' },
            ];
        } else {
            links = [
                { label: 'Home', link: './', active: true },
                { label: 'About', link: './aboutUs' },
                { label: 'Create Account', link: '#createAccount' },
                { label: 'Login', link: './myNode' },
            ];
        }
        return (
            <>
                <CenMenu links={links} logo={logo} />
                <Router>
                    <Switch>
                        {/*All our Routes go here!*/}
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/myUploads" component={UploadPage} />
                        <Route exact path="/myNode" component={NodePage} />
                        <Route exact path="/aboutUs" component={AboutUsPage} />
                        <Route exact path="/404" component={NotFoundPage} />
                        <Redirect to="/404" /> 
                    </Switch>
                </Router>
            </>


    );
  }
}

export default App;
