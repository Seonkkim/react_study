import React,{useState} from 'react';

function InputSample() {
    
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
        age: 0
    });

    const {name, nickname, age} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
            age: 0
        });
    };

    return(
        <div>
            <div>
            <input name="name" placeholder='name' onChange={onChange} value={name}/> 
            </div>
            <input name="nickname" placeholder='nickname' onChange={onChange} value={nickname}/>
            <input placeholder='age' onChange={onChange} value={age}/>
            <button onClick={onReset}>초기화</button>
        <div>
            <b>name: {name} nickname: {nickname} age: {age}</b>
        </div>
        </div>
    );
}

export default InputSample;