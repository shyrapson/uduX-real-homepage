import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { sideBarItems, sideBarItemsTypes } from "../../lib/data";
import Vector from "../../assets/images/Vector.png";

const SideNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  z-index: 1000;
  background: url(${Vector}), #000000;
  display: none;
  & a {
    color: white;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
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
          <BottomIcon>{icon}</BottomIcon>
        </NavLink>
      ))}
    </SideNavContainer>
  );
};

export default SideNav;
