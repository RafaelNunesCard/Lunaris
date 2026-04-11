import styled from "styled-components";
import { IconSearch } from "../assets/icons/IconSearch";

const Bar = styled.input`
    display: flex;
    width: 467px;
    background: #1B0C1A;
    border-radius: 10px;
    border: none;
    padding: 6px 10px;
    color: #FADCD5;
`;

const StyledIconSearch = styled(IconSearch)`
    svg{
        width: 20px;
        height: 20px;
        fill: #FADCD5;
    }
`; 

export function Search(){
    return (
        <>
            <StyledIconSearch />
            <Bar placeholder="Pesquisar:" />
        </>
    );
}