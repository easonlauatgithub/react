import { call, put, takeEvery } from 'redux-saga/effects';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = todo => ({
    type: ADD_TODO,
    payload:{
        todo,
    },
});

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
});

function* fetchData() {
    console.log("========== fetchData start ============");
  // 使用 data 接收請求的資料
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  console.log("========== fetchData fetch done ============");
  yield put(fetchDataSuccess(data));
  console.log("========== fetchData put to reducer done ============");
}

function* mySaga() {
    console.log("========== mySaga takeEvery start ============");
    yield takeEvery(FETCH_DATA_BEGIN, fetchData);
    console.log("========== mySaga takeEvery end ============");
}
  
export default mySaga;