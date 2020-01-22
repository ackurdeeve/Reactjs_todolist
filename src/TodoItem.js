import React, {Component} from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }

    handleClick(){
        // 子组件修改父组件的值
        this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;