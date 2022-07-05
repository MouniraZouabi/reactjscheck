import logo from './logo.svg';
import couverture from './couverture.png';

import './App.css';
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <img src={couverture}  className="couvert" alt="logo" />
      
    <header className="App-header">

    <h1> Welcome To React-JS Workshop  </h1>
    <img src={logo} className="App-logo" alt="logo" />
      <Form>
    
      
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">
      < FaEnvelope/></InputGroup.Text>
    <FormControl
      placeholder="E-mail"
      aria-label="E-mail"
      aria-describedby="basic-addon1" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">
      <FaUser /></InputGroup.Text>
    <FormControl
      placeholder="Name"
      aria-label="Name"
      aria-describedby="basic-addon1" />
  </InputGroup>
  <Form.Select>
     <option>Choose learn language .. </option>
      <option>Frensh</option>
      <option>English</option>
    </Form.Select>
    <br/>
    <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" 
        placeholder="Availability : From 09:00 => To 13:00"/>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" 
        placeholder="Availability : From 14:00 => To 16:00 "/>
      </InputGroup>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control placeholder="About your skills" as="textarea" rows={2} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Register
  </Button> <br></br>
  
     
</Form>















       
        
      </header>
    </div>
  );
}

export default App;
