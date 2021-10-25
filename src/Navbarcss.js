import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbarcss = styled.nav`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 70px;
    color: white;
    background: black;
    font-size:16px;
    font-weight:bold;
    width:100%;
`;

export const NavbarUl = styled.ul`
    display: flex;
    justify-content:center;
    align-items:center;
    color: white;

  
`;


export const NavbarLi = styled.li`
    color: white;
    margin: 2rem;
    list-style : none;


`;

export const LinkElement = styled(Link)`
    color: white;

    text-decoration:none;

    &:hover{
        color: red;
        font-size:20px;
    }
  
`;
