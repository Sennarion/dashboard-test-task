import smallAvatar from 'assets/images/user1x.jpg';
import largeAvatar from 'assets/images/user2x.jpg';
import { UserWrapper, Avatar, Content, Name, Position } from './User.styled';

export default function User() {
  return (
    <UserWrapper>
      <Avatar
        srcset={`${smallAvatar} 1x ${largeAvatar} 2x`}
        src={smallAvatar}
        alt="user avatar"
        width="42"
      />
      <Content>
        <Name>Evano</Name>
        <Position>Project Manager</Position>
      </Content>
    </UserWrapper>
  );
}
