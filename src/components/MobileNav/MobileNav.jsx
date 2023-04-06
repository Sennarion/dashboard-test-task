import { User, Nav, Container } from 'components';
import { Menu, Content } from './MobileNav.styled';

export default function MobileNav({ isOpen, toggleMenu }) {
  return (
    <Menu isOpen={isOpen}>
      <Container>
        <Content>
          <Nav toggleMenu={toggleMenu} />
          <User />
        </Content>
      </Container>
    </Menu>
  );
}
