import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layouts = ({ childer }) => {
    return (
        <>
            <Header />
            {childer}
            <Footer />
        </>
    );
};

export default Layouts;