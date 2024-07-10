// src/hooks/useDeleteTodos.js
const useDeleteTodos = ({ todos, setTodos }) => {
    const handleDeleteTodos = () => {
      setTodos(todos.filter(todo => !todo.completed));
    };
  
    return handleDeleteTodos;
  };
  
  export default useDeleteTodos;
  