import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Button
} from 'reactstrap';

const NavToolbar: React.FC = () => {
    return (
        <div>
            <Navbar data-test="component-nav" color="primary" dark>
                <NavbarBrand href="/" className="font-weight-bolder">Your Weather</NavbarBrand>
                <Button size="sm" color="success text-uppercase px-3 font-weight-bold">Info</Button>
            </Navbar>
        </div>
    );
}

export default NavToolbar;