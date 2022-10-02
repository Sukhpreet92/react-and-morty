import styled from 'styled-components'

function Header() {
    return (
        <ContainerHeader>&#128216; React and Morty &#129313; </ContainerHeader>
    )
}

export default Header

const ContainerHeader = styled.h1`
    position: static !important;
    text-align: center;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 0em !important;
    margin-block-end: 0.67em;
    background: yellow;
    border-bottom: 1px solid black;
`
