import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { sideBarItems, sideBarItemsTypes } from "../../lib/data";

console.log(sideBarItems);

const SideNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: space-around;
  z-index: 1000;
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
            <Icon>{icon}</Icon>
          </BottomIcon>
        </NavLink>
      ))}
    </SideNavContainer>
  );
};

export default SideNav;
