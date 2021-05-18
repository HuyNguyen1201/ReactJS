import { fork, take, call, put, delay, takeLatest, select, takeEvery } from 'redux-saga/effects';
import { showLoading, hideLoading } from '../actions/ui';
import * as taskTypes from './../constants/task';
import { addTask, getList } from './../apis/task';
import { STATUSES, STATUS_CODE } from './../constants/index';
import { addTaskFailded, addTaskSuccess, fetchListTask, fetchListTaskFailded, fetchListTaskSuccess, filterTaskSuccess } from './../actions/task';
import { hideModal } from '../actions/modal';

function* watchFetchListTaskAction() {
    while (true) {
        const action = yield take(taskTypes.FETCH_TASK); //khi fetch Taks dc bat thi block duoi dc c
        yield put(showLoading());
        const {params} = action.payload;
        const resp = yield call(getList,params);//block
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            //dispatch fetchListTaskSuccess
            yield put(fetchListTaskSuccess(data));
        }
        else {
            //dispatch fetchListTaskFailed
            yield put(fetchListTaskFailded(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function* filterTaskSaga({ payload }) {
    yield delay(500);
    const {keyword} = payload;
    yield put(fetchListTask({
        q: keyword
    }));
    // const { keyword } = payload;
    // //get list form state reducers
    // const list = yield select(state => state.task.listTask);
    // const filteredTask = list.filter(task => task.title.toLowerCase().includes(keyword.trim().toLowerCase()));
    // yield put(filterTaskSuccess(filteredTask));

}
function* addTaskSaga({ payload }) {
    const { title, description } = payload;
    yield put(showLoading());
    const resp = yield call(addTask,{title,
        description,
        status: STATUSES[0].value
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(data));
        yield put(hideModal());
    } else {
        yield put(addTaskFailded(data));
    }
    yield delay(1000);
    yield put(hideLoading());
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction); // non blocking
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;