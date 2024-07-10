// src/hooks/useCheckboxChange.js
const useCheckboxChange = ({ todos, setTodos }) => {
    const handleCheckboxChange = (index) => {
      const newTodos = [...todos];//새로운 배열의 생성 -> 원본배열을 직접 수정하지 않고 불변성 유지 가능
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos); //todos 상태를 업데이트 하는 함수
    };
  
    return handleCheckboxChange;
  };
  
  export default useCheckboxChange;
  