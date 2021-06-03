import React, { Component } from 'react';


const Problematic = () => {
    throw(new Error('bugs'));
    return(
        <div>
            
        </div>
    );
};

class Finderror extends Component{
    state = {
        number : 0
    }
//------create component init ------------------------------------------------
    constructor(props) { // 새로운 component 생성
        super(props);
        console.log('constructor');
    } 

    componentDidMount() { // component가 화면에 나온 후 호출
                          // 외부 라이브러리 연동, component에서 필요한 데이터 요청
                          // DOM의 속성을 읽거나 직접 변경                           
        console.log('componentDidMount');
    }
//-------update component -----------------------------------------------------
    shouldComponentUpdate(nextProps, nextState) { // 조건에 따라 render 호출 x
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;     
    }

    getSnapshotBeforeUpdate(prevProps, prevState){ 
        // 마지막으로 렌더링된 결과가 DOM에 반영되었을 때 호출
        console.log('getSnapshotBeforeUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    handleIncrease= () => {
        this.setState(
            ({ number }) => ({
                number : number+1
            })
        )
    };

    handleDecrease= () => {
        this.setState(
            ({number}) => ({
                number : number -1
            })
        )
    };

    componentDidCatch(error, info) {
        this.setState({
          error: true
        });
      }

    render() {
        console.log('render');
        if (this.state.error) return (<h1>에러발생!</h1>);
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }


}

export default Finderror;