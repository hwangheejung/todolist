import React, { Component } from 'react';
import TodoList from './component/TodoList';
import {Map,List, fromJS} from 'immutable';
import './App.css';
import TodoHeader from './component/TodoHeader';

class App extends Component {
  //생성자
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todoItem:fromJS([
        {
        id:2,
        text:'',
        checked:false,
        isEditing:false
      }])
    }
  }

  //Mount
  componentDidMount(){
    let initTodoItem = List([
      Map({id:0,text:"자바스크립트 공부하기",checked:false, isEditing:false}),
      Map({id:1,text:"리액트 공부하기",checked:false, isEditing:false}),
      Map({id:2,text:"다이어리 작성하기",checked:false, isEditing:false})
    ]);
    this.setState({todoItem: initTodoItem})

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
   if(!this.state.todoItem.filter((todo)=>(todo.get('text') === this.state.value)).isEmpty()){ //중복 검사
      this.setState({ 
        value:''
      })
      alert('이미 존재합니다.다시 입력해 주세요')
    }
    else{
    if (this.state.value !== '') { 
      this.setState({
        value: '',
        todoItem: this.state.todoItem.push(Map({ id:this.id+1 ,text: this.state.value, checked: false, isEditing:false })),
      });
    }
    else { //입력값이 존재하지 않으면
      alert('할일을 입력해주세요');
    }
  }
  };

  //업데이트 시 값이 변경되었을 때 
  handleUpdateChange = (e, index) => {
    const newTodoItem= this.state.todoItem.setIn([index,'text'],e.target.value);
    this.setState({ todoItem: newTodoItem });
  };


  // 삭제버튼을 눌렀을 때
  handleDeleteTodo = (id) => {
    const deleteTodo = this.state.todoItem.filter((_, index) => index !== id);
    this.setState({ todoItem: deleteTodo });
  };

  //   checkbox 선택했을 때
  handleCheckBox = (index) => {
    const checkedVar = this.state.todoItem.get(index).get('checked');
    const newTodoItem= this.state.todoItem.setIn([index,'checked'],!checkedVar);
    this.setState({ todoItem: newTodoItem });
  };


  //수정버튼을 눌렀을 때 
  handleUpdateBtn = (index) => {
    const isEditing = this.state.todoItem.get(index).get('isEditing');
    const newTodoItem= this.state.todoItem.setIn([index,'isEditing'],!isEditing);
    this.setState({ todoItem: newTodoItem });
  };


  //전체 체크 버튼을 눌렀을 때
  handleAllCheck = ()=>{
      const newTodoItem= this.state.todoItem.map((todo)=>todo.set('checked',true));
      this.setState({todoItem:newTodoItem});
  }

  //전체 체크 해제 버튼을 눌렀을 때 
  handleAllUnCheck=()=>{
    const newTodoItem= this.state.todoItem.map((todo)=>todo.set('checked',false));
      this.setState({todoItem:newTodoItem});
  }



  render() {
    return (
      <div className="App">
        <h1 className="header">TodoList</h1>
        <div className="todolist-wrapper">
          <TodoHeader
            todoItem={this.state.todoItem}
            handleAllCheck={this.handleAllCheck}
            handleAllUnCheck={this.handleAllUnCheck}/>
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