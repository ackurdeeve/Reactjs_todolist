import React, {Component} from "react";
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {content, test} = this.props;
        return (
            <div onClick={this.handleClick}>
                {test}-{content}
            </div>
        )
    }

    handleClick() {
        // 子组件修改父组件的值
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

// 限制传值类型
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps={
    test: 'Hello World'
};

export default TodoItem;
