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
                        //添加监听并绑定this与相应函数，否则this = undefined
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>
                        提交
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                //band可以添加传递的值给函数
                                <li key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}>
                                    {item}
                                </li>
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


