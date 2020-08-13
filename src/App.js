import React, { Component } from 'react';
import { connect } from 'react-redux'

//Components
import Status from './components/Status'
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
import ReactGA from 'react-ga'

import * as actions from './actions'
import Header from './containers/Header'
import Footer from './containers/Footer'
//Pages
import MainPage from "./pages/index"; ///< index.js will be automatically imported 
//And render that route with the MainPage component for the root path /
import NotFoundPage from "./pages/404";
import UploadPage from "./pages/myUploads";
import NodePage from "./pages/myNode";
import AboutUsPage from "./pages/aboutUs";



class App extends Component {
    initGA() {
        ReactGA.initialize(process.env.GA_TRACKING_ID)
        console.log('Initialized')
    }

    logPageView() {
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
        console.log(`Logged: ${window.location.pathname}`)
    }

    componentDidMount() {
        this.props.initIPFS()
        if (process.env.NODE_ENV === 'production') {
            if (!window.GA_INITIALIZED) {
                this.initGA()
                window.GA_INITIALIZED = true
            }
            this.logPageView()
        }
    }

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
                { label: 'Create Account', link: './myUploads' },
                { label: 'Login', link: './myNode' },
            ];
        }
        return (
            <>
                <CenMenu links={links} logo={logo} />
                <Status ipfs={this.props.ipfs} {...this.props} />
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

function mapStateToProps(state) {
    return {
        ipfs: state.ipfs
    }
}

export default connect(mapStateToProps, actions)(App)
