import React from 'react';
import Header from './Components/Header/Header';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import ExperienceJob from './Components/ExperienceJob/Experience.Job';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Education />
      <Skills />
      <ExperienceJob />
    </div>
  );
}

export default App;
