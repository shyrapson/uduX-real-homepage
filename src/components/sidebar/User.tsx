import styled from "styled-components";
import UserAvatar from "../../assets/images/user.png";

const Image = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;
const UserName = styled.span`
    color: white;
    margin-left: 7px;
`

const AvatarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: #0F0F0F;
  align-items: center;
`;

const User = () => {
  return (
    <AvatarContainer>
      <Image src={UserAvatar} alt="user image" />
      <UserName>Hey! Aleem</UserName>
    </AvatarContainer>
  );
};

export default User;
