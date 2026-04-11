import styled from "styled-components";

const Moon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #D9D9D9;

    position: relative;
`
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #2D222E;

    position: absolute;
    top: 3px;
    right: -5px;
`

export function Logo(){
    return (
        <Moon>
            <Circle>
            </Circle>
        </Moon>
    );
}