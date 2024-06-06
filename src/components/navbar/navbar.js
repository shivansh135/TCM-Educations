import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {
        selected: null,
        mobileMenuOpen: false // State to track mobile menu open/close
    }

    // Toggle mobile menu
    toggleMobileMenu = () => {
        this.setState(prevState => ({
            mobileMenuOpen: !prevState.mobileMenuOpen
        }));
    }

    handleClick = (index) => {
        this.setState({ selected: index });
    }

    render() {
        const { currentPage, currentImg } = this.props;
        const navbarStyle = currentPage === 'specialPage' ? 'navbar-special' : 'navbar-default';
        const logoSrc = currentImg === 'specialPage' ? '/images/tcm.png' : '/images/Icon_tcm.png';
        const links = [
            { name: 'Home', path: '/' },
            { name: 'Career counselling', path: '/form-page' },
            { name: 'Past Papers', path: '/past-papers' },
            { name: 'Offline Centres', path: '/offline-centre' },
            { name: 'Mock Series', path: '/test-series' }
        ];

        return (
            <div className={navbarStyle} style={{ position: 'sticky', top: '0px', zIndex: '1000' }}>
                <div className='desktop-navbar'>
                    <div className='navbar'>
                        <div className='navbar_content'>
                            <div className='navbar_logo'>
                                <Link to='/'>
                                    <img src={logoSrc} alt='logo' />
                                </Link>
                            </div>
                            <div className='navbar_head' >
                                <div className='navbar_council'><Link to='/form-page'>Career counselling</Link></div>
                                <div className='navbar_pp'><Link to='/past-papers'>Past Papers</Link></div>
                                <div className='navbar_offCetre'><Link to='/offline-centre'>Offline Centres</Link></div>
                                <div className='navbar_mock'><Link to='/test-series'>Mock Series</Link></div>
                                <button className='navbar_signup'><Link to='/login'>Login</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='mobile-navbar navbar' style={{ padding: '0px' }}>
                    <div className='navbar_content' style={{ padding: '10px 10px', paddingBottom: '10px', width: '-webkit-fill-available' }}>
                        <div className='navbar_top'>
                            <Link to='/' className='navbar_logo' style={{ height: 'fit-content' }}>
                                <img src={logoSrc} alt='logo' style={{ width: '90%', height: 'auto' }} />
                            </Link>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                            <Link to='/login' className='navbar_signup' style={{padding:'12px 12px',marginRight:'7px',textDecoration:'none'}}>Login</Link>
                            
                            {this.state.mobileMenuOpen ?
                            <svg onClick={this.toggleMobileMenu} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                            :<svg onClick={this.toggleMobileMenu}s xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>}
                            </div>
                        </div>
                        {this.state.mobileMenuOpen && (
                            <nav className='navbar_head_container'>
                                <ul className='navbar_head' style={{flexDirection:'column'}} onClick={()=>{this.toggleMobileMenu()}}>
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
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
