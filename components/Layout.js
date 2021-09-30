
import React from "react"
import Head from 'next/head';

const Layout = ({children}) => {

    const head = () => (
        <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" 
            crossorigin="anonymous" 
        />
    )

    const nav = () => (
        <ul className="nav nav-tabs bg-warning">

            <li className="nav-item">
                <a className="nav-link text-dark" href="">
                    Home
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link text-dark" href="">
                    Login
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link text-dark" href="">
                    Register
                </a>
            </li>

        </ul>
    )

    return(
        <React.Fragment>
            {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
        </React.Fragment>
    )
    
}
export default Layout