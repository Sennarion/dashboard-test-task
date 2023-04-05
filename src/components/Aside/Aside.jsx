import { Logo, Nav, User } from 'components';
import { StyledAside, Content } from './Aside.styled';

export default function Aside() {
  return (
    <StyledAside>
      <Content>
        <Logo />
        <Nav />
      </Content>
      <User />
    </StyledAside>
  );
}
