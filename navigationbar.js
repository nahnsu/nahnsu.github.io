/*eslint-env es6*/
/*global React*/
/*global ReactDOM*/
/*eslint-env browser*/
"use strict";

//import React from 'react';

const e = React.createElement;

class NavBar extends React.component{
    render(){
        return e(
//            <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
//                <div class="container">
//                    <a class="navbar-brand" href="index.html">Home</a>
//                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
//                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
//                            <li class="nav-item"><a class="nav-link" href="cv.html">Curriculum Vitae</a></li>
//                            <li class="nav-item dropdown">
//                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Master's Thesis</a>
//                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                                    <li><a class="dropdown-item" href="abstract.html">Abstract</a></li>
//                                    <li><a class="dropdown-item" href="introduction.html">Introduction</a></li>
//                                </ul>
//                            </li>
//                            <li class="nav-item dropdown">
//                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">NahnScripts</a>
//                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                                    <li><a class="dropdown-item" href="#">Cornerstone</a></li>
//                                    <li><a class="dropdown-item" href="#">Squiggle</a></li>
//                                </ul>
//                            </li>
//                        </ul>
//                    </div>
//                </div>
//            </nav>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('navBar'));
root.render(NavBar);//"<h1>Test</h1>");
//const navBar = <NavBar></NavBar>
//
//const domContainer = document.querySelector('#navBar');
//const root = ReactDOM.createRoot(domContainer);
//root.render((NavBar));