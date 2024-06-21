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
        const logoSrc = currentImg === 'specialPage' ? '/logo/tcmLogoWhite.svg' : '/logo/tcmLogo.svg';
        const links = [
            { name: 'Directors', path: '/directors' },
            { name: 'Media Coverage', path: '/news' },
            { name: 'Courses', path: '/all-batches' },
            { name: 'Previous Year Papers', path: '/pyqs/cat' },
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
                                    <img src={logoSrc} alt='logo'style={{width:'100%'}} />
                                </Link>
                            </div>
                            <div className='navbar_head' >
                                <div className='navbar_council'><Link to='/directors'>Directors</Link></div>
                                <div className='navbar_council'><Link to='/news'>Media Coverage</Link></div>
                                <div className='navbar_council'><Link to='/all-batches'>Cources</Link></div>
                                <div className='navbar_council'><Link to='/form-page'>Career counselling</Link></div>
                                <div className='navbar_pp'><Link to='/pyqs/cat'>Past Papers</Link></div>
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
                                <img src={logoSrc} alt='logo' style={{ width: '100%', height: 'auto',marginTop:'2px' }} />
                            </Link>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                            <Link to='/login' className='navbar_signup' style={{padding:'12px 12px',marginRight:'7px',textDecoration:'none'}}>Login</Link>
                            
                            {this.state.mobileMenuOpen ?
                            
                            <svg onClick={this.toggleMobileMenu} width="26" height="26" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M133.333 166.667C114.924 166.667 100 181.591 100 200C100 218.409 114.924 233.333 133.333 233.333H666.667C685.077 233.333 700 218.409 700 200C700 181.591 685.077 166.667 666.667 166.667H133.333ZM233.333 400C233.333 381.59 248.257 366.667 266.667 366.667H666.667C685.077 366.667 700 381.59 700 400C700 418.41 685.077 433.333 666.667 433.333H266.667C248.257 433.333 233.333 418.41 233.333 400ZM433.333 600C433.333 581.59 448.257 566.667 466.667 566.667H666.667C685.077 566.667 700 581.59 700 600C700 618.41 685.077 633.333 666.667 633.333H466.667C448.257 633.333 433.333 618.41 433.333 600Z" fill="black"/>
</svg>


                            
                            :
                            
                            <svg  onClick={this.toggleMobileMenu} width="26" height="26" viewBox="0 0 800 800" fill={currentPage==="specialPage"?'white':'black'} xmlns="http://www.w3.org/2000/svg">
                            <path d="M133.333 600H666.666" stroke="black" stroke-width="66.6667" stroke-linecap="round"/>
                            <path d="M133.333 400H666.666" stroke="black" stroke-width="66.6667" stroke-linecap="round"/>
                            <path d="M133.333 200H666.666" stroke="black" stroke-width="66.6667" stroke-linecap="round"/>
                            </svg>

                            
                            }
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
