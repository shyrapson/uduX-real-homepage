import styled from "styled-components";
import UserAvatar from "../../assets/images/user.png";

const Image = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;
const UserName = styled.span`
 display: ${(props: any) => props.display ? 'none': 'flex'};
    color: white;
    margin-left: 7px;
  
`

const AvatarContainer = styled.div`
display: flex;
  width: 100%;
  padding: 20px;
  background-color: #0F0F0F;
  align-items: center;
  
  @media screen and (max-width: 768px){
        display: ${(props: any) => props.display ? 'none' : 'flex'};
      
       margin-top: 10px;
    }&img{ margin: 0px 20px;

    }&span{
display: none;
    }
    
`;

const User = ({display}:any) => {
  console.log(display,'wahala')
  return (
    <AvatarContainer >
      <Image src={UserAvatar} alt="user image" />
      <UserName display={display}>Hey! Aleem</UserName>
    </AvatarContainer>
  );
};

export default User;
