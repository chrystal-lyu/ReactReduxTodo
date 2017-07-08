export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

// export var addTodoReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return action.text;
//     default:
//       return state;
//   };
// };
//
// export var toggleTodoReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'TOGGLE_TODO':
//       return
//     default:
//       return state;
//   }
// };
