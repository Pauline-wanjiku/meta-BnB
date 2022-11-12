import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div>
        <div>logo</div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="#">Home</NavLink>
              </li>
              <li>
                <NavLink to="/PlaceToStay">Place to stay</NavLink>
              </li>
              <li>
                <NavLink to="#">NFTS</NavLink>
              </li>
              <li>
                <NavLink to="#">Community</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
