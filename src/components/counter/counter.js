import {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.initValue
        }
    }

    increment = () => {
        this.setState(
          state => ( {
              number: state.number + 1,
        } ))
    }
    decrement = () => {
        this.setState(state => ({
           number: state.number -1,
        } ))
    }
    random = () => {
        let random = Math.round(Math.random()* (-100) ) + 50;
        this.setState({
         number: random,
        })
    }
    reset = () => {
        this.setState({
           number: 0,
        })
    }
    render() {
        return (
            <div className={'counter'}>
                <h1>{this.state.number}</h1>
                <div className={'controls'}>
                    <button className={'btn'} onClick={this.increment}>INC</button>
                    <button className={'btn'} onClick={this.decrement}>DEC</button>
                    <button className={'btn'} onClick={this.random}>RND</button>
                    <button className={'btn'} onClick={this.reset}>RST</button>
                </div>
            </div>
        )
    }
}

export default Counter