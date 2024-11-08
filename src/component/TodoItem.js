import React, { Component } from 'react';

class TodoItem extends Component {

 

    render() {
        const {todo,index,handleCheckBox,handleUpdateBtn,handleUpdateChange,handleDeleteTodo} = this.props;
        return (
            <div>
                  <div className="todoItem">
              <span className="todo-num">{index+1} </span>
              <input
                type="checkbox"
               checked={todo.checked}
                onChange={() => handleCheckBox(index)}
              />
              <input
                className="item-content"
                type="text"
                onChange={(e) => handleUpdateChange(e, index)}
                value={todo.text}
                disabled={!todo.isEditing}
                style={{
                  textDecoration: todo.checked ? "line-through" : "none",
                  border: todo.isEditing ? "1px solid black" : "none",
                  borderRadius:"20px",
                  padding:"10px"
                }}
              />
              <div className="buttons">
                  <button
                    onClick={() => handleUpdateBtn(index)}
                    disabled={todo.checked}>
                   {todo.isEditing ? "완료" : "수정"}
                </button>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
              </div>
            </div>  
            </div>
        );
    }
}

export default TodoItem;