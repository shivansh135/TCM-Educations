import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
// export function Navbar({currentPage , currentImg}) {
//     const navbarStyle = currentPage === 'specialPage' ? 'navbar-special' : 'navbar-default';
//     const logoSrc = currentImg === 'specialPage' ? '/images/tcm.png' : '/images/Icon_tcm.png';
class Navbar extends React.Component {
    state = {
        selected: null
    }

    handleClick = (index) => {
        this.setState({ selected: index });
    }

    render() {
        const { currentPage, currentImg } = this.props;
        const navbarStyle = currentPage === 'specialPage' ? 'navbar-special' : 'navbar-default';
        const logoSrc = currentImg === 'specialPage' ? '/images/tcm.png' : '/images/Icon_tcm.png';
        const links = [
            { name: 'Career counselling', path: '/form-page' },
            { name: 'Past Papers', path: '/past-papers' },
            { name: 'Offline Centres', path: '/offline-centre' },
            { name: 'Mock Series', path: '/test-series' }
        ];

    return (
        <div className={navbarStyle}>
            <div className='desktop-navbar'>
            <div className='navbar'>
                <div className='navbar_content'>
                    <div className='navbar_logo'>
                        <Link to='/'>
                         <img src={logoSrc} alt='logo' style={{width:'100%', height:'auto'}} />
                        </Link>
                    </div>
                    <div className='navbar_head'>
                        <div className='navbar_council'><Link to='/form-page'>Career counselling</Link></div>
                        <div className='navbar_pp'><Link to='/past-papers'>Past Papers</Link></div>
                        <div className='navbar_offCetre'><Link to='/offline-centre'>Offline Centres</Link></div>
                        <div className='navbar_mock'><Link to='/test-series'>Mock Series</Link></div>
                        <button className='navbar_signup'><Link to='/login'>Login/Signup</Link></button>
                    </div>
                </div>

                </div>
            </div>
            <div className='mobile-navbar'>
            <div className='navbar'>
                <div className='navbar_content'>
                    <div className='navbar_top'>
                        <div className='navbar_logo'>
                            <Link to='/'>
                                <img src={logoSrc} alt='logo' style={{width:'100%', height:'auto'}} />
                            </Link>
                        </div>
                        <button className='navbar_signup'><Link to='/login'>Login/Signup</Link></button>
                    </div>
                    <nav className='navbar_head_container'>
                        <ul className='navbar_head'>
                        {links.map((link, index) => (
                                        <li 
                                            key={index} 
                                            className={this.state.selected === index ? 'selected' : ''} 
                                            onClick={() => this.handleClick(index)}
                                        >
                                            <div className={`navbar_${link.name.replace(' ', '').toLowerCase()}`}><Link to={link.path}>{link.name}</Link></div>
                                        </li>
                                    ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
        
    )
}
}

export default Navbar;