import styled from "styled-components";
import { Logo } from "../components/Logo";
import { Search } from "../components/Search";

const Container = styled.div`
    padding: 12px 42px;
    background: #2D222E;
    display: flex;

`

export function Header(){
    return (
        <Container>
            <Logo></Logo>
            <Search></Search>
        </Container>
    )
}