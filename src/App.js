import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';

/* Photo by Surface on Unsplash */
import backgroundImage from './assets/surface-background-unsplash.jpg';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de APIs', 'Projeto React Web']);

    function handleAddProject() {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projects" />

            <img width={250} src={backgroundImage} alt=""/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;