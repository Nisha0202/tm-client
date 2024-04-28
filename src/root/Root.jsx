import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";
import 'react-tooltip/dist/react-tooltip.css'

export default function Root() {
    return (
        <>
            <div id="detail" className="imprima">
                <div className="container">
                     <Header></Header>
                <Outlet />
                </div>
               
                <Footer></Footer>

            </div>
        </>
    );
}