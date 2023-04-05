import { User, Nav, Container } from 'components';
import { Menu, Content } from './MobileNav.styled';

export default function MobileNav({ isOpen }) {
  return (
    <Menu isOpen={isOpen}>
      <Container>
        <Content>
          <Nav />
          <User />
        </Content>
      </Container>
    </Menu>
  );
}
