import React, { Component } from 'react';
import TodoList from './component/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todoItem:[ {
        id:2,
        text:'',
        checked:false

      }]
    }
  }

  componentDidMount(){
    const initTodoItem = [
      {id:0,text:"자바스크립트 공부하기",checked:false},
      {id:1,text:"리액트 공부하기",checked:false},
      {id:2,text:"다이어리 작성하기",checked:false}
    ];

    this.setState({todoItem:initTodoItem})

  }

  // 입력값이 변화하였을 때
  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  //엔터를 눌렀을 때
  handleInputEnter = (e) => {
     if (e.keyCode === 13) {
      this.handleAddTodo();
      e.preventDefault();
    }
  }

  // 입력버튼을 눌렀을 시
  handleAddTodo = () => {    
    if(this.state.todoItem.filter((todo)=>(todo.text === this.state.value)).length===1){
      this.setState({
        value:''
      })
      alert('이미 존재합니다.다시 입력해 주세요')
    }
    else{
    if (this.state.value !== '') {
      this.setState({
        id:this.state.id+1,
        value: '',
        todoItem: [...this.state.todoItem, { id:this.state.todoItem[this.state.todoItem.length-1].id+1 ,text: this.state.value, checked: false }],
      });
    }
    else {
      alert('할일을 입력해주세요');
    }
  }
  };

  //업데이트 시 값이 변경되었을 때 
  handleUpdateChange = (e, index) => {
    const newTodoItem = [...this.state.todoItem];
    newTodoItem[index].text = e.target.value;
    this.setState({ todoItem: newTodoItem });
  };



  // 삭제버튼을 눌렀을 때
  handleDeleteTodo = (id) => {
    const deleteTodo = this.state.todoItem.filter((_, index) => index !== id);
    this.setState({ todoItem: deleteTodo });
  };

  //   checkbox 선택했을 때
  handleCheckBox = (index) => {
    const newTodoItem = [...this.state.todoItem];
    newTodoItem[index].checked = !newTodoItem[index].checked;
    this.setState({ todoItem: newTodoItem });
  };

  //수정버튼을 눌렀을 때 
  handleUpdateBtn = (index) => {
    const newTodoItem = [...this.state.todoItem];
    newTodoItem[index].isEditing = !newTodoItem[index].isEditing;
    this.setState({ todoItem: newTodoItem });
  };

  handleAllCheck = ()=>{
      const newTodoItem = [...this.state.todoItem];
      newTodoItem.map((_,index)=>newTodoItem[index].checked=true);
      this.setState({todoItem:newTodoItem});
  }

  handleAllUnCheck=()=>{
    const newTodoItem = [...this.state.todoItem];
    newTodoItem.map((_,index)=>newTodoItem[index].checked=false);
    this.setState({todoItem:newTodoItem});
  }



  render() {
    return (
      <div className="App">
        <h1 className="header">TodoList</h1>
        <div className="todolist-wrapper">
          <div className='todolist-header'>

          <div className="check-control">
            <button onClick={this.handleAllCheck}>전체 체크</button>
            <button onClick={this.handleAllUnCheck}>전체 체크 해제</button>
          </div>
          <div className='imcomplete-todoItem'>남은 할일 개수 :
            {this.state.todoItem.filter(element => !element.checked).length}</div>
          </div>
          <div className='inputText'>

            {/* 입력창 */}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputEnter}
              placeholder="할일을 입력하세요"
            />
            {/* 버튼 클릭 시 할일 목록에 추가 */}
            <button className="input-btn" onClick={this.handleAddTodo}>입력</button>
          </div>
          <TodoList 
            todoItem={this.state.todoItem}
            handleCheckBox={this.handleCheckBox}
            handleUpdateChange={this.handleUpdateChange}
            handleUpdateBtn={this.handleUpdateBtn}
            handleDeleteTodo={this.handleDeleteTodo}

          />
        </div>

      </div>
    );
  }
}

export default App;