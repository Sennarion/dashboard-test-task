import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Aside, Content } from 'components';
import { Main } from './App.styled';

export default function App() {
  return (
    <>
      <Main>
        <Aside />
        <Content>App</Content>
      </Main>
      <GlobalStyleComponent />
    </>
  );
}
