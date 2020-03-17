import { Component } from 'react';
import Link from 'next/link';
import './navbar.scss';

export default class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar">
                <div className="navbar-inner">
                    <div className="branding">
                        <Link href="/"><a>Robert Nordgren</a></Link>
                    </div>
                    <div className="itemlist">
                        <ul>
                            <li className="nav-item"><Link href="/work"><a>Work</a></Link></li>
                            <li className="nav-item"><Link href="/"><a>About</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}