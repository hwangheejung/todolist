import React, { Component } from 'react';

class TodoHeader extends Component {
    render() {
        const {todoItem,handleAllCheck,handleAllUnCheck} = this.props;
        return (
            <div>
             <div className="check-control">
            <button onClick={handleAllCheck}>전체 체크</button>
            <button onClick={handleAllUnCheck}>전체 체크 해제</button>
          </div>
          <div className='imcomplete-todoItem'>남은 할일 개수 :
            {todoItem.filter(element => !element.get('checked')).size}</div>
            </div>
        );
    }
}

export default TodoHeader;