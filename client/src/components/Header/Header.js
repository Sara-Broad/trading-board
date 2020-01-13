import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar className='navBar'>
                    <div >
                    <Nav.Link href='/' className='navBar'>Home</Nav.Link>
                    <Nav.Link href='/trade' className='navBar'>Trade</Nav.Link>
                    <Nav.Link href='/login' className='navBar'>Log-in</Nav.Link>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header;