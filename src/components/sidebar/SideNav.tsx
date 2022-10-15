import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { sideBarItems, sideBarItemsTypes } from "../../lib/data";

import Vector from "../../assets/images/Vector.png";


const SideNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: space-around;
  z-index: 1000;
  background: url(${Vector});
  padding-left: 200px;
  
 
`;

const BottomIcon = styled.div`
  padding: 20px;
  height: 100%;
`;

const Icon = styled.div``;

const SideNav = () => {
  return (
    <SideNavContainer>
      {sideBarItems.map(({ icon, href }: sideBarItemsTypes, i: number) => (
        <NavLink to={href} key={i}>
          <BottomIcon>
          </BottomIcon>
        </NavLink>
      ))}
    </SideNavContainer>
  );
};

export default SideNav;
