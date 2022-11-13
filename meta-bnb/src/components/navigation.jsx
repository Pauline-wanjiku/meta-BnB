import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import metaBnBLogo from "./Images/MetaBnBLogo.png";
import houseMeta from "./Images/houseLogo.png";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <>
        <div>
          <div>
            <nav>
              <div className="logo">
                <img src={houseMeta} className="logoImage" alt="logo" />
                <img src={metaBnBLogo} className="logoImage2" />
              </div>
              <ul>
                <li>
                  <NavLink to="#">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/PlaceToStay">PLACE TO STAY</NavLink>
                </li>
                <li>
                  <NavLink to="#">NFTS</NavLink>
                </li>
                <li>
                  <NavLink to="#">COMMUNITY</NavLink>
                </li>
                
              </ul>
              <div id="mobile" onClick={this.handleClick}>
                <i
                  id="bar"
                  className={
                    this.state.clicked ? "fas fa-times" : "fas fa-bars"
                  }></i>
                {/* <i className="fas fa-bars"></i> */}
                {/* <i className="fas fa-times"></i> */}
              </div>
              <div className="connectWallet">
                <ConnectWallet />
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
const ConnectWallet = () => {
  return (
    <>
      <button className="connectWalletBtn">Connect Wallet</button>
    </>
  );
};

export default Navigation;
