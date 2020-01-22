import React, {Component, Fragment} from "react";
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props);
        //定义数据
        this.state = {
            inputValue: 'Hello',
            list: []
        }
    }

    render() {
        return (
            //占位符
            <Fragment>
                <div>
                    {
                        //这是一个单行注释
                    }

                    <label htmlFor="insertArea">输入内容</label>

                    {/* 1，添加监听并绑定this与相应函数，否则this = undefined
                        2，不要与html里面的class重名
                    */}
                    <input
                        id='insertArea'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue}
                        className='input'
                    />

                    <button onClick={this.handleBtnClick.bind(this)}>
                        提交
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                //父组件传递值给子组件,可以传递多个值
                                <div>
                                    <TodoItem content={item}
                                              index={index}
                                              deleteItem={this.handleItemDelete.bind(this)}
                                    />
                                </div>
                                // band可以添加传递的值给函数
                                // 不转义 dangerouslySetInnerHTML
                                // <li key={index}
                                //     onClick={this.handleItemDelete.bind(this, index)}
                                //     dangerouslySetInnerHTML={{__html: item}}
                                // >
                                // </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        // console.log(this);
        // this.state.value = e.target.value;
        this.setState({
            inputValue: e.target.value
        });
        console.log(e.target.value)
    }

    handleBtnClick() {
        this.setState({
            //展开运算符
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }

    handleItemDelete(index) {
        // console.log(index);
        //immutable， state不允许直接改变，先...复制以后再改
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        })
    }
}

export default TodoList;


