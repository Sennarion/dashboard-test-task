import useMediaQuery from 'hooks/useMediaQuery';
import { theme } from 'styles/theme';
import { Section, Container } from 'components';
import { StyledContent, ContentTitle } from './Content.styled';

export default function Content() {
  const isDesktop = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  return (
    <StyledContent>
      {isDesktop ? (
        <>
          <ContentTitle>Hello Evano 👋🏼,</ContentTitle>
          <Section />
        </>
      ) : (
        <Container>
          <ContentTitle>Hello Evano 👋🏼,</ContentTitle>
          <Section />
        </Container>
      )}
    </StyledContent>
  );
}
