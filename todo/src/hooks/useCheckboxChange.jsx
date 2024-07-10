// src/hooks/useCheckboxChange.js
const useCheckboxChange = ({ todos, setTodos }) => {
    const handleCheckboxChange = (index) => {
      const newTodos = [...todos];//새로운 배열의 생성
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    return handleCheckboxChange;
  };
  
  export default useCheckboxChange;
  