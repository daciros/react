import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

class Header extends Component {
state = {
  activeItemClassicTabs3: "1"
}


toggleClassicTabs3 = tab => () => {
  if (this.state.activeItemClassicTabs3 !== tab) {
  this.setState({
    activeItemClassicTabs3: tab
  });
  }
}

render() {
    return (
    <MDBContainer>
      <div className="classic-tabs">
        <MDBNav classicTabs color="orange" className="mt-5">
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemClassicTabs3==="1"} onClick={this.toggleClassicTabs3("1")}>
              <MDBIcon icon="user" size="2x" />
              <br />
              Profile
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemClassicTabs3==="2"} onClick={this.toggleClassicTabs3("2")}>
              <MDBIcon icon="heart" size="2x" />
              <br />
              Follow
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemClassicTabs3==="3"} onClick={this.toggleClassicTabs3("3")}>
              <MDBIcon icon="envelope" size="2x" />
              <br />
              Contact
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemClassicTabs3==="4"} onClick={this.toggleClassicTabs3("4")}>
              <MDBIcon icon="star" size="2x" />
              <br />
              Be Awesome
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent className="card mb-5" activeItem={this.state.activeItemClassicTabs3}>
          <MDBTabPane tabId="1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias.
              Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2">
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias.
              Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="4">
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </MDBContainer>
    );
  }
}

export default Header;