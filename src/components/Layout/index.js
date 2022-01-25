import * as S from './styles';

function Layout({ children }) {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
}

export default Layout;
