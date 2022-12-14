
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  BottomSideNav,
  ItemsType,
  Playsongs,
  topSideNav,
} from "../../lib/data";
import { PlaylistIcon, SearchIcon, SoundIcon } from "../icons";
import Vector from "../../assets/images/Vector.png";
import User from "./User";


const SidebarContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Vector}), #000000;
  display: flex;
  flex-direction: column;
  overflow-y: scroll !important;
  overflow-x: hidden;
  @media screen and (max-width:1024px){
        display: none;
    }

`;

const NavItems = styled.ul`
  width: calc(100% - 20px);
  margin: 0;
  margin-left: 20px;
  margin-top: 10px;
  padding: 20px;
  list-style-type: none;
`;

const NavItem = styled.li`

  font-weight: 600;
  font-size: 16px;
  line-height: 2;
  width: 100%;
  padding: 10px 0px;
  color:#ffff;
  & a {
    text-decoration: none;
    color:white;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    &:hover {
      color: #fbba12;
    }
    & svg {
      color: #d9d9d9 !important;
    }
    & span {
      margin: 0px 10px 9px;
    }
  }
`;

const Separator = styled.div`
  background-color: #282828;
  width: 100%;
  height: 1px;
  margin: 15px 0px;
`;

const Icon = styled.div`

`;
const Playlist = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  // padding-left: 40px;
  // margin-top: 20px;
  & a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    color: white;
    &:hover {
      color: #fbba12;
    }
    & svg {
      color: #d9d9d9 !important;
    }
    & span {
      margin: 0px 10px;
    }
  }
`;
const Songs = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Song = styled.div`
  color: white;
  font-weight: 500;
  line-height: 2;
  height: 100%;
  padding: 10px 0px;
  font-size: 14px;
  cursor: pointer;
`;


const SidebarSongs = () => {
  return (
    <SidebarContainer>
<User />
      <NavItems>
        {topSideNav.map(({ icon, title, href }: ItemsType, i: number) => (
          <NavItem key={i}>
            <NavLink to={href}>
              <Icon>{icon}</Icon>
              <span>{title}</span>
            </NavLink>
          </NavItem>
        ))}
        <Separator />
        {BottomSideNav.map(({ icon, title, href }: ItemsType, i: number) => (
          <NavItem key={i} active={title}>
            <NavLink to={href}>
              <Icon>{icon}</Icon> <span>{title}</span>{" "}
              {title === "Liked Songs" && <SoundIcon />}
            </NavLink>
          </NavItem>
        ))}
      </NavItems>
      <NavItems>
        <Playlist>
          <NavLink to="/playlist">
            <PlaylistIcon/> <span>My Playlists</span><SearchIcon/>
          </NavLink>
       <SearchIcon/>
        </Playlist>
        <Separator />
        <Songs>
          {Playsongs.map((el, i) => (
            <Song key={i}>{el}</Song>
          ))}
        </Songs>
      </NavItems>
    </SidebarContainer>
  );
};

export default SidebarSongs;
