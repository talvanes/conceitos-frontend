import React from 'react';

import Header from './components/Header';

function App() {
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Login</li>
                    <li>About</li>
                </ul>
            </Header>
        </>
    );
}

export default App;