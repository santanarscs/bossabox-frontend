import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import ToolsActions from '../ducks/tools';

export function* getTools({ search }) {
	let endpoint = 'tools';
	if (search && search.term) {
		endpoint = search.tagsOnly ? `${endpoint}?tags_like=${search.term}` : `${endpoint}?q=${search.term}`;
	}
	const response = yield call(api.get, endpoint);
	yield put(ToolsActions.getToolsSuccess(response.data));
}

export function* createTool({ tool }) {
	try {
		const tags = tool.tags.split(' ').filter(tag => tag !== '') || [];
		const newTool = { ...tool, tags };
		const response = yield call(api.post, 'tools', newTool);
		yield put(ToolsActions.createToolSuccess(response.data));
		yield put(ToolsActions.closeToolModal());
	} catch (err) {
		console.log(err);
	}
}
export function* removeTool({ id }) {
	try {
		yield call(api.delete, `tools/${id}`);
		yield put(ToolsActions.removeToolSuccess(id));
	} catch (err) {
		console.log(err);
	}
}
