import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../componenents/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout