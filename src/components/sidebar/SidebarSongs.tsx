import React, { ReactElement } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Sidebg from "../icons/Sidebg";

import {
  BottomSideNav,
  ItemsType,
  Playsongs,
  topSideNav,
} from "../../lib/data";
import { SoundIcon } from "../icons";

const SidebarContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Sidebg}), #000000;
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll !important; */
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
  color: #d9d9d9;
  font-weight: 600;
  font-size: 16px;
  line-height: 2;
  width: 100%;
  padding: 10px 0px;
  & a {
    text-decoration: none;

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
      margin: 0px 10px;
    }
  }
`;

const Separator = styled.div`
  background-color: #282828;
  width: 100%;
  height: 1px;
  margin: 15px 0px;
`;

const Icon = styled.div``;
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
  color: "#D9D9D9";
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
      {/* <SidebarTop display={true} /> */}
      <NavItems>
        {topSideNav.map(({ icon, title, href }: ItemsType, i: number) => (
          <NavItem key={i}>
            <NavLink to={href}>
              <Icon name={icon} /> <span>{title}</span>
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
            <Icon name="playlist" /> <span>My Playlists</span>
          </NavLink>
          <Icon name="search" />
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
