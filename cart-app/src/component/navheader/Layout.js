import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet style={{padding: "20px"}}/>
            <Footer />
        </div>
    )
}

export default Layout
