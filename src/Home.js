import React from 'react'
import Devs from './Components/Devs/Devs';
import Libreries from './Components/Libreries/Libreries';
import ProjectView from './Components/ProjectView/ProjectView';


function Home() {
  return (
    <div>
      <ProjectView/>
      <Devs/>
      <Libreries/>
      
    </div>
  )
}

export default Home