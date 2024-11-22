import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Categories from './Menus/Categories';
import HealthChecks from './Menus/HealthChecks';
import Community from './Menus/Community';
import Store from './Menus/Store';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
const AppHeader = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '50px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderColor: "#91caff",
        borderStyle: "solid",
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >
                        <Link className='navbar-brand' href="/">
                            <img src="https://hhg-common.hellobacsi.com/common/logo/hellobacsi.png" style={{ width: "107px", height: "24px" }} alt="hellobacsi logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Nav>
                        <Nav className="me-auto" >
                            <Categories />
                        </Nav>
                        <Nav className="me-auto" >
                            <HealthChecks />
                        </Nav>
                        <Nav className="me-auto" >
                            <Community />
                        </Nav>
                        <Nav className="me-auto" >
                            <Store />
                        </Nav>
                        <Nav className="me-auto" >
                            <Link style={{ textDecoration: "none", color: 'black' }} href={"/"}>Đặt lịch với bác sĩ</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav" style={{ paddingRight: "20px" }}>
                        <NavDropdown title="Thông tin tài khoản" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Link href={'/blog'}>Blog</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>

                    <Button className="me-auto" >
                        <Link style={{ textDecoration: "none", color: 'white' }} href={"/"}>Tải App</Link>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}

export default AppHeader;