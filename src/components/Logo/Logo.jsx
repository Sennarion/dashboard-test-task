import icons from 'assets/icons/icons.svg';
import { StyledLogo, LogoIcon, LogoText, LogoVersion } from './Logo.styled';

export default function Logo() {
  return (
    <StyledLogo href="/">
      <LogoIcon width="37" height="37">
        <use href={`${icons}#icon-setting`}></use>
      </LogoIcon>
      <LogoText>
        Dashboard<LogoVersion>v.01</LogoVersion>
      </LogoText>
    </StyledLogo>
  );
}
