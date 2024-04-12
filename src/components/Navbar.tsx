import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoSVG from './logo.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #FF1B68;
  margin-left: -1rem; 
`;
const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 66%;
  height: auto; 
  padding-left: 1.5rem; 
`;

const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center; 
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const NavLink = styled.a`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding-right: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <LogoButton onClick={() => window.location.href = '/'}>
        <Logo src={LogoSVG} alt="MAILEO Logo" />
      </LogoButton>
      <NavItems>
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
