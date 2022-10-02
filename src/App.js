import Header from './components/header/Header'
import React from 'react'
import Navigation from './components/navbar/NavBar'
function App() {
    return (
        <div>
            <Header />
            <main>
                <ul>
                    <li>
                        <img
                            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                            alt="Morty Smith"
                        />
                        <p>Morty Smith</p>
                        <button>Show more</button>
                    </li>
                </ul>
            </main>
            <footer>
                <Navigation>
                    <button>Placeholder</button>
                    <button>Placeholder</button>
                </Navigation>
            </footer>
        </div>
    )
}

export default App
