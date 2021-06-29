import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import Hello from './Hello';
import Counter from './counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24,
      padding: '1rem'
  }
  return (
  <Wrapper>
    <Hello name="react" color = "red" isSpecial={true}/>
    <Hello color = "gray"/>
    <div style={style}>{name}</div>
    <Counter/>
    <div>
  <InputSample/>
  <UserList/>
    </div>
  </Wrapper>
  );
}

export default App;
