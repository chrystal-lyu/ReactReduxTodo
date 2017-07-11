var expect = require('expect');
var df = require('deep-freeze-strict'); //use for tests - avoid updating on an frozen object
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action ={
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should showCompleted status gets flipped', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todoReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'Something to do',
          completed: false,
          createdAt: '456'
        }
      };
      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      var todos = [
        {
          id: 1,
          text: 'workout',
          completed: true,
          createdAt: 124,
          completedAt: 125
        }
      ];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todoReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it('should add existing todos', () => {
      var todos = [
        {
          id: '111',
          text: 'Anything',
          completed: false,
          completedAt: undefined,
          createdAt: 33000
        }
      ]
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
