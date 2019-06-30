import { all, takeLatest } from "redux-saga/effects";

import { getTools, createTool } from "./tools";
import { ToolsTypes } from "../ducks/tools";

export default function* rootSaga() {
  return yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getTools),
    takeLatest(ToolsTypes.CREATE_TOOL_REQUEST, createTool)
  ]);
}
