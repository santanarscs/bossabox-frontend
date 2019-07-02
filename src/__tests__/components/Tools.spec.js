import React from "react";
import { mount, shallow } from "enzyme";
import { find, findAll } from "styled-components/test-utils";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import ToolsActions from "../../store/ducks/tools";
const mockStore = createStore();

const INITIAL_STATE = {
  tools: {
    data: [
      {
        id: 1,
        title: "Notion",
        link: "https://notion.so",
        description:
          "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
          "organization",
          "planning",
          "collaboration",
          "writing",
          "calendar"
        ]
      }
    ],
    toolModalOpen: false
  }
};

const store = mockStore(INITIAL_STATE);

import Tools from "../../components/Tools";

describe("Tools Component", () => {
  it("should render title", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tools />
      </Provider>
    );
    expect(wrapper.find("h1").exists()).toBe(true);
  });
  it("should render subtitle", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tools />
      </Provider>
    );
    expect(wrapper.find("h2").exists()).toBe(true);
  });
  it("should render input search and input checkbox tag", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tools />
      </Provider>
    );
    expect(wrapper.find('input[name="term"]').exists()).toBe(true);
    expect(
      wrapper.find('input[type="checkbox"][name="tagsOnly"]').exists()
    ).toBe(true);
  });
  it("should render button add tools", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tools />
      </Provider>
    );
    expect(wrapper.find('button[name="addTool"]').exists()).toBe(true);
  });
  it("should render list tools", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tools />
      </Provider>
    );
    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.find("ul").find("li").length).toBe(6);
    expect(
      wrapper
        .find("ul")
        .find('button[name="removeTool"]')
        .exists()
    ).toBe(true);
  });
  it("should be able to open modal new tool", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Tools />
      </Provider>
    );
    wrapper.find('button[name="addTool"]').simulate("click");
    expect(store.getActions()).toContainEqual(ToolsActions.openToolModal());
  });
});
