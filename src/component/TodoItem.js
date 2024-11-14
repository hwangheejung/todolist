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
                checked={todo.get('checked')}
                onChange={() => handleCheckBox(index)}
              />
              <input
                className="item-content"
                type="text"
                onChange={(e) => handleUpdateChange(e,index)}
                value={todo.get('text')}
                disabled={!todo.get('isEditing')}
                style={{
                  textDecoration: todo.get('checked') ? "line-through" : "none",
                  border: todo.get('isEditing') ? "1px solid black" : "none",
                  borderRadius:"20px",
                  padding:"10px"
                }}
              />
              {/* <div>{todo.get('text')}</div> */}
              <div className="buttons">
                  <button onClick={() => handleUpdateBtn(index)}
                    disabled={todo.get('checked')}>
                  {todo.get('isEditing') ? "완료" : "수정"}
                </button>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
              </div>
            </div>  
            </div>
        );
    }
}

export default TodoItem;