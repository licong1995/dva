export default {
  namespace: 'products',
  state: {
    list: [
      { name: '1', id: 1, key: 1 },
      { name: '2', id: 2, key: 2 },
      { name: '3', id: 3, key: 3 },
      { name: '4', id: 4, key: 4 },
      { name: '5', id: 5, key: 5 },
    ],
    count: 6
  },
  reducers: {
    'delete'(state, action) {
      const list = state.list.filter(item => item.id !== action.payload.id)
      return {...state, list}
    },
    'reduce'(state){
      const count = state.count - 1
      return {...state, count}
    },
    'add'(state){
      const count = state.count + 1
      return {...state, count}
    }
  },
  // effects: {
  //   *addAfter1Second(action, { call, put }) {
  //     yield call(delay, 1000);
  //     yield put({ type: 'add' });
  //   },
  // },
  
};