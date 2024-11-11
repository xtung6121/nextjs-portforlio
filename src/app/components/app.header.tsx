import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
const AppHeader = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >
                        <Link className='navbar-brand' href="/">ShopAcc</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' href="/facebook">FaceBook</Link>
                            <Link className='nav-link' href="/insta">Insta</Link>
                            <Link className='nav-link' href="/linkin">LinkIn</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        <NavDropdown title="Thông tin tài khoản" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppHeader;