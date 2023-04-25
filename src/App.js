import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'

function App() {

  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators(...collaborators, collaborator)
  } 

  return (
    <div className="App">
      <Banner />

      <Form onCollaboratorCreate={collaborator => newCollaborator(collaborator)}></Form>
    </div>
  );
}

export default App;
