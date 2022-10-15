import styled from "styled-components";
import { NextIcon, PrevIcon, SearchIcon } from "../icons";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const BtnIcon = styled.div`
  padding: 5px 15px;
  cursor: pointer;
  margin: 10px 5px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding: 8px;
  flex: 1;
  background: transparent;
  margin-left: 10px;
  color: #d9d9d9;
  outline: none;
  border: none;
  line-height: 2;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #0f0f0f;
  margin-left: 70px;
  padding: 0px 20px;
  width: 471px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconContainer>
        <BtnIcon>
          <PrevIcon />
        </BtnIcon>
        <BtnIcon>
          <NextIcon />
        </BtnIcon>
      </IconContainer>
      <InputContainer>
        <SearchIcon />
        <Input autoComplete="off" type="text" name="search" />
      </InputContainer>
    </NavbarContainer>
  );
};

export default Navbar;
