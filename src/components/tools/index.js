import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ToolsActions from "../../store/ducks/tools";
import {
  Container,
  ToolsContainerAction,
  ToolsList,
  TitleList,
  TagList
} from "./styles";

export class Tools extends Component {
  componentDidMount() {
    const { getToolsRequest } = this.props;
    getToolsRequest();
  }
  render() {
    const { tools } = this.props;
    return (
      <Container>
        <h2>Very Useful Tools to Remember</h2>
        <ToolsContainerAction>
          <div>
            <input type="text" placeholder="search" name="searchTerm" />
            <input type="checkbox" name="searchTags" />
            search in tags only
          </div>
          <button type="button">Add</button>
        </ToolsContainerAction>
        <ToolsList>
          {tools.data.map(tool => (
            <li key={tool.id}>
              <TitleList>
                <a href={tool.link} target="_blank">
                  {tool.title}
                </a>
                <button type="button">remover</button>
              </TitleList>
              <p>{tool.description}</p>
              <TagList>
                {tool.tags.map(tag => (
                  <li>#{tag}</li>
                ))}
              </TagList>
            </li>
          ))}
        </ToolsList>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  tools: state.tools
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ToolsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);
