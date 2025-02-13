import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../componenents/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default MainLayout