import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getToolsRequest: null,
  getToolsSuccess: ["data"],
  openToolModal: null,
  closeToolModal: null,
  createToolRequest: ["tool"],
  createToolSuccess: ["tool"],
  removeToolRequest: ["id"],
  removeToolSuccess: ["id"]
});

export const ToolsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  toolModalOpen: false
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });
export const openModal = state => state.merge({ toolModalOpen: true });
export const closeModal = state => state.merge({ toolModalOpen: false });
export const createSuccess = (state, { tool }) =>
  state.merge({ data: [...state.data, tool] });
export const removeSuccess = (state, { id }) => {
  return state.merge({ data: state.data.filter(tool => tool.id !== id) });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOOLS_SUCCESS]: success,
  [Types.OPEN_TOOL_MODAL]: openModal,
  [Types.CLOSE_TOOL_MODAL]: closeModal,
  [Types.CREATE_TOOL_SUCCESS]: createSuccess,
  [Types.REMOVE_TOOL_SUCCESS]: removeSuccess
});
