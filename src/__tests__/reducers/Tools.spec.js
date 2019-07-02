import ToolsActions, { reducer } from "../../store/ducks/tools";
describe("Tools Reducer", () => {
  it("should be able to add tools", () => {
    console.log(ToolsActions);
    const state = reducer(
      { data: [] },
      ToolsActions.createToolRequest("teste")
    );
    expect(state.data[0]).toBe("teste");
  });
});
