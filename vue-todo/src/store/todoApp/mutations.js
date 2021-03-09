const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  // obj 안에 어떤값이 있는지 확인하기 위해 JSON.stringify 사용
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1); // index 부터 1개 삭제
};

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  // localStorage 갱신
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
