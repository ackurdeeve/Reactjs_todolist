import React, {Component, Fragment} from "react";
import TodoItem from './TodoItem'
import './style.css'


class TodoList extends Component {
    constructor(props) {
        super(props);
        //定义数据
        this.state = {
            inputValue: 'Hello',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            //占位符
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>

                    {/* 1，添加监听并绑定this与相应函数，否则this = undefined
                        2，不要与html里面的class重名
                    */}
                    <input
                        id='insertArea'
                        onChange={this.handleInputChange}
                        value={this.state.inputValue}
                        className='input'
                    />

                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <TodoItem content={item}
                              index={index}
                              deleteItem={this.handleItemDelete}
                              test = 'myTest'
                        // 不建议用index做key值
                    />
                </div>
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(
            () => ({
                inputValue: value
            })
        )
    }

    handleBtnClick() {
        this.setState(() => ({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ""
            })
        )
    }


    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState(() => ({
                list: list
            })
        )
    }
}

export default TodoList;


