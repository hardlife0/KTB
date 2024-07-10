// src/hooks/useDoubleClick.js
const useDoubleClick = ({ todos, setTodos }) => {
    const handleDoubleClick = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return handleDoubleClick;
  };
  
  export default useDoubleClick;
  