import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "../Modal";

import ToolsActions from "../../store/ducks/tools";
import {
  Container,
  ToolsContainerAction,
  ToolsList,
  TitleList,
  TagList
} from "./styles";

export class Tools extends Component {
  static propTypes = {
    openToolModal: PropTypes.func.isRequired,
    closeToolModal: PropTypes.func.isRequired,
    getToolsRequest: PropTypes.func.isRequired,
    tools: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          link: PropTypes.string,
          description: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string)
        })
      ),
      toolModalOpen: PropTypes.bool
    }).isRequired
  };
  componentDidMount() {
    const { getToolsRequest } = this.props;
    getToolsRequest();
  }
  render() {
    const { tools, openToolModal, closeToolModal } = this.props;
    return (
      <Container>
        <h2>Very Useful Tools to Remember</h2>
        <ToolsContainerAction>
          <div>
            <input type="text" placeholder="search" name="searchTerm" />
            <input type="checkbox" name="searchTags" />
            search in tags only
          </div>
          <button type="button" onClick={openToolModal}>
            Add
          </button>
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
                  <li key={tag}>#{tag}</li>
                ))}
              </TagList>
            </li>
          ))}
        </ToolsList>
        {tools.toolModalOpen && (
          <Modal>
            <h1>Add new tool </h1>
            <form>
              <span>Tool Name</span>
              <input type="text" />
              <span>Tool Link</span>
              <input type="text" />
              <span>Tool description</span>
              <textarea cols="30" rows="5" />
              <span>Tags</span>
              <input type="text" />
              <div>
                <button type="button" onClick={closeToolModal}>
                  Fechar
                </button>
                <button type="submit">Add tool</button>
              </div>
            </form>
          </Modal>
        )}
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
