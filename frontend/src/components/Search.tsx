import styled from "styled-components";
import { IconSearch } from "../assets/icons/IconSearch";

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
            <input
            className="
                flex-1 max-w-[467px]          
                px-[10px] py-[6px]            
                bg-[#1B0C1A]                  
                text-[#FADCD5]                
                placeholder:text-[#FADCD5]/60 
                border-0 rounded-[10px]       
                focus:outline-none focus:ring-2 focus:ring-[#FADCD5] 
            "
            placeholder="Pesquisar:"
            />
        </>
    );
}