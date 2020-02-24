import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import fire from '../../config/fire'


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      user: {}
    };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  logout = (e) => {
    e.preventDefault()
    fire.auth().signOut()
    this.setState({
      user: null
    })
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
        console.log(user)
        if(user) {
            this.setState({user});
        }else{
            this.setState({user: null});
        }
    });
  }

  componentDidMount = () => {
    this.authListener()
  }

  render() {
    return (
      <div className="pb-3">
          <header>
            <MDBNavbar style = {{backgroundColor:'#32469F'}} fixed="top" dark expand="md">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <strong>shareTruck</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/"><strong>Home</strong></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/searchbylocation">
                        <strong>Search By location</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/bookyourconsignment">
                        <strong>Book Your Consignment</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    {this.state.user ? (
                      <MDBNavItem>
                        <button className = "btn btn-outline-light rounded font-weight-bold" onClick = {this.logout}>Admin Logout</button>
                      </MDBNavItem>
                    ) : (
                      <MDBNavItem>
                        <MDBNavLink to="/login">
                          <strong>Admin Sign In</strong>
                        </MDBNavLink>
                      </MDBNavItem>
                    )}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar> 
          </header>
      </div>
    );
  }
}

export default Navbar;
