import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import useAddTodo from '../hooks/useAddTodo';
import useDeleteTodos from '../hooks/useDeleteTodos.jsx';
import useCheckboxChange from '../hooks/useCheckboxChange.jsx';
import useDoubleClick from '../hooks/useDoubleClick.jsx';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]); //할일 목록을 관리
  const [input, setInput] = useState(''); //사용자에게 입력받는 텍스트 필드를 관리

  const handleAddTodo = useAddTodo({ todos, setTodos, input, setInput });
  const handleDeleteTodos = useDeleteTodos({ todos, setTodos });
  const handleCheckboxChange = useCheckboxChange({ todos, setTodos });
  const handleDoubleClick = useDoubleClick({ todos, setTodos });
// 동작하는 핸들러를 제공한다 

  return (
    <div className="TodoContainer">
      <div>
        <h2 className="title">Todolist</h2>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button id="add" onClick={handleAddTodo}>
          추가
        </Button>
        <Button id="delete" onClick={handleDeleteTodos}>
          삭제
        </Button>
      </div>
      <TodoList
        todos={todos}
        onCheckboxChange={handleCheckboxChange}
        onDoubleClick={handleDoubleClick}
      />
    </div>
  );
};

export default TodoContainer;
