import { HeaderStyled, NavList, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
      <HeaderStyled>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/" end>Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movie">Movie</StyledNavLink>
            </li>
          </NavList>
        </nav>
      </HeaderStyled>
  );
};

