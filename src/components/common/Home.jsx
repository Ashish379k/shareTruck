import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import fire from '../../config/fire';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             user: {}
        }
    }
    
    render() {
        return (
            <MDBView src="https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                <h2 className="display-3">Provide Best Service For shareTruck</h2>
                </MDBMask>
            </MDBView>
        )
    }
}
export default Home;
