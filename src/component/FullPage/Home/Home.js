import React from 'react';
import Navbars from '../../Shared/Navbars/Navbars';
import Footer from '../../Shared/Footer/Footer';
import Project from '../../FullPage/Project/Project';
import Article from '../../FullPage/Article/Article';
import GetInTouch from '../../FullPage/GetInTouch/GetInTouch';
import Header from '../../FullPage/Header/Header';
const Home = () => {
    return (
        <div>
  
    <Header></Header>
    <Project></Project>
    <Article></Article>
    <GetInTouch></GetInTouch>

        </div>
    );
};

export default Home;