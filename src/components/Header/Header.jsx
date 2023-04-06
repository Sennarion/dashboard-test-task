import { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { theme } from 'styles/theme';
import { Logo, Container, MobileNav } from 'components';
import { StyledHeader, HeaderContent } from './Header.styled';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      return;
    }

    document.documentElement.style.overflow = 'auto';
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo />
          <Hamburger
            size={20}
            toggled={isMenuOpen}
            onToggle={toggleMenu}
            color={theme.colors.black}
            rounded
          />
        </HeaderContent>
        <MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </Container>
    </StyledHeader>
  );
}
