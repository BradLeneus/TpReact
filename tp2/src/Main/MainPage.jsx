import React from 'react';
import SideBar from '../SideBar/SideBar';
import CurrentDate from '../Date/CurrentDate';
import Navbar from '../Nav/Nav';
import Accordeon from './List';
import Footer from '../Footer/Footer';
function MainPage() {
    return (
        <div>
           <Navbar/>
        < CurrentDate/>
        <Accordeon />
        <Footer />
        </div>
    );
}

export default MainPage;