import styled from 'styled-components'

function Navigation({ page, setPage }) {
    return (
        <NavBar>
            <ListUl>
                <ListLi>
                    {' '}
                    <Button>Home </Button>
                </ListLi>
                <ListLi>
                    {' '}
                    <Button>Random </Button>
                </ListLi>
                <ListLi>
                    {' '}
                    <Button>Favorties </Button>
                </ListLi>
                <ListLi>
                    {' '}
                    <Button>Get creative </Button>
                </ListLi>
            </ListUl>
        </NavBar>
    )
}

export default Navigation

const NavBar = styled.nav`
    background: yellow;
    border-top: 1px solid black;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`
const ListUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
`
const ListLi = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
    color: black;
    font-size: 2em;

    &:hover {
        background-color: black;
        color: white;
        transition: 0.5s;
`
