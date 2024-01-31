import React from "react"
import '../css/Home.css'
import HomeHeader from './components/HomeHeader.js';
import HomeBody from './components/HomeBody.js';
import HomeFooter from './components/HomeFooter.js';
import SideNav from "./SideNav.js";

export default function Home(){
    return (
        <div id="home-container">
            <HomeHeader></HomeHeader>
            <div id="home-body-container">
                <SideNav></SideNav>
                <HomeBody></HomeBody>
                
            </div>
            <HomeFooter></HomeFooter>

            <p>lorem ipsum</p>
        </div>
    )
}