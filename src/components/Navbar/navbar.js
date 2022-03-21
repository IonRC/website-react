import React, {Component} from 'react';
import navbar from "./navbar.css"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
// import "./apptest.css"
import cosicon from "./img/cosicon.png"


function Apptest() {
    return (
        <div>
            <Navbar  className="App" bg="myBg" variant="dark"
                    sticky="top">

                <Navbar.Brand>
                    <img src="https://silicon.createx.studio/assets/img/logo.svg" width="40px" height="40px"/>{` `}
                    Silicon
                </Navbar.Brand>

                <Nav className="nav">
                    <NavDropdown title="Landing">
                        <div>
                            //aici o sa vina div cu cele din interior si cu o poza
                        </div>
                    </NavDropdown>
                    <NavDropdown title="Pages">
                        <NavDropdown.ItemText href="Pages/About">About</NavDropdown.ItemText>
                        <NavDropdown.Item href="Pages/About v1">About v1</NavDropdown.Item>
                        <NavDropdown.Item href="Pages/About v2">About v2</NavDropdown.Item>
                        <NavDropdown.ItemText href="Pages/Portofolio">Portofolio</NavDropdown.ItemText>
                        <NavDropdown.Item href="Pages/Grid View">Grid View</NavDropdown.Item>
                        <NavDropdown.Item href="Pages/List View">List View</NavDropdown.Item>
                        <NavDropdown.Item href="Pages/Courses">Courses</NavDropdown.Item>
                        <NavDropdown.Item href="Pages/Single Project">Single Project</NavDropdown.Item>
                        <NavDropdown.Item href="Pages/Single Course">Single Course</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Account">
                        <NavDropdown.Item href="Account/Account Details">Account Details</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Security">Security</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Notifications">Notifications</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Messages">Messages</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Saved Items">Saved Items</NavDropdown.Item>
                        <NavDropdown.Item href="Account/My Collections">My Collections</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Payment Details">Payment Details</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Sign In">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="Account/Sign Up">Sign Up</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="https://silicon.createx.studio/components/typography.html">UI Kit</Nav.Link>
                    <Nav.Link href="https://silicon.createx.studio/docs/getting-started.html">Docs</Nav.Link>

                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <Nav.Link href="spacer"> </Nav.Link>
                    <NavDropdown.Divider/>
                    <NavDropdown.Divider/>
                    <NavDropdown.Divider/>
                    <NavDropdown.Divider/>


                   <div className="btnn">
                       <label className="form-check-label d-none d-sm-block light" htmlFor="theme-mode">Light</label>
                       <Form>

                        <Form.Check className={"swich"}
                            type="switch"
                            id="custom-switch"
                            label=""
                        />

                    </Form>
                       <label className="form-check-label d-none d-sm-block light" htmlFor="theme-mode">Dark</label>

                    <Button className="albastrel" href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/"><img
                        src={cosicon} alt="" className={"cosicon"} />Buy new</Button>
                   </div>


                </Nav>

            </Navbar>

        </div>
    );
}

export default Apptest;
