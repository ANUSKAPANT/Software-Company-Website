import React from 'react'

import Navigation from './navigation';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div>
            <Navigation />
            {props.children }
            <Footer />
        </div>
    )
}

export default Layout