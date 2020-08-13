import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'

//Components
import Status from './components/Status'

//Import all needed Components for changing pages
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./navbar";
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
        return (
        <BrowserRouter>
            <React.Fragment>
              <Navbar />
              <div className="container">
                <Switch>
                  {/*All our Routes go here!*/}
                  <Route exact path="/" component={MainPage} />
                    <Route exact path="/myUploads" component={UploadPage} />
                    <Route exact path="/myNode" component={NodePage} />
                    <Route exact path="/aboutUs" component={AboutUsPage} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Redirect to="/404" /> 
                </Switch>
              </div>
            </React.Fragment>
        </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");

function mapStateToProps(state) {
    return {
        ipfs: state.ipfs
    }
}

export default connect(mapStateToProps, actions)(App)
