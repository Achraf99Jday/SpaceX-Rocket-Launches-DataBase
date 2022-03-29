import Link from 'next/link'

import React from 'react'

const Navigation = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <Link href="/">
                    <div className="logoContainer cursor-pointer">
                        <p><span className="navMain">Pimster X Jday</span> </p>
                    </div>
                </Link>
                <input type="checkbox" id="navbar-toggle" />
                <label htmlFor="navbar-toggle"><i></i></label>
                <nav className="menu">
                    <ul>
                        <li className="menuItem"><Link href="/">Home</Link></li>
                        <li className="menuItem"><Link href="/launches">All Launches</Link></li>
                        <li className="menuItem"><Link href="/rockets">All Rockets</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
