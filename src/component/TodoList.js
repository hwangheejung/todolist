import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const {todoItem,handleCheckBox,handleUpdateBtn,handleUpdateChange,handleDeleteTodo} = this.props;
        return (
            <>
                {/* 할일 목록 출력 */}
                <div className="todolist">
                    {todoItem.map((todo, index) => (
                        <TodoItem
                            key={todoItem[index].id}
                            todoItem={todoItem}
                            todo={todo} index={index}
                            handleCheckBox={handleCheckBox}
                            handleUpdateBtn={handleUpdateBtn}
                            handleUpdateChange={handleUpdateChange}
                            handleDeleteTodo={handleDeleteTodo} />
                    ))}
                </div>
            </>
        );
    }
}

export default TodoList;