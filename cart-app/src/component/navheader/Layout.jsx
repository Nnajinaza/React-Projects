import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Nav />
            <Outlet style={{padding: "20px"}}/>
            <Footer />
        </div>
    )
}

export default Layout
