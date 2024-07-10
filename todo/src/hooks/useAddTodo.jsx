// src/hooks/useAddTodo.js
const useAddTodo = ({ todos, setTodos, input, setInput }) => {
    const handleAddTodo = () => {
      if (!input) {
        alert('내용을 입력해주세요');
      } else {
        setTodos([...todos, { text: input, completed: false }]);
        //스프레드 연산자를 사용하면서 복제, 원래의 배열을 변경시키지 않으면서 새로운 아이템 추가
        setInput('');
      }
    };
  
    return handleAddTodo;
  };
  
  export default useAddTodo;
  