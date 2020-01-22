import React, {Component} from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {content} = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        // 子组件修改父组件的值
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;