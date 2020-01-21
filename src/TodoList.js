import React, {Component, Fragment} from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        //定义数据
        this.state = {
            inputValue: 'Hello!!!',
            list: []
        }
    }

    render() {
        return (
            //占位符
            <Fragment>
                <div>
                    <input
                        //添加监听并绑定this，否则this = undefined
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>learning React</li>
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e){
        // console.log(this);
        // this.state.value = e.target.value;
        this.setState({
            inputValue: e.target.value
        });
        console.log(e.target.value)
    }
}

export default TodoList;


