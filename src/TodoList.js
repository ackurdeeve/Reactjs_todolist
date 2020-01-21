import React, {Component, Fragment} from "react";

class TodoList extends Component {
    render() {
        return (
            <Fragment> //占位符
                <div>
                    <input/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>learning React</li>
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;


