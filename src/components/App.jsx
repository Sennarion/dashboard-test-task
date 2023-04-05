import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Header, Aside, Content } from 'components';
import { Main } from './App.styled';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <Content>App</Content>
      </Main>
      <GlobalStyleComponent />
    </>
  );
}
