import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import Hello from './Hello'

function App() {
  return (
  <Wrapper>
    <Hello name="react" color = "red" isSpecial={true}/>
    <Hello color = "pink"/>
  </Wrapper>
  );
}

export default App;
