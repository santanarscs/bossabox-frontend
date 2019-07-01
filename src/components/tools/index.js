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
    createToolRequest: PropTypes.func.isRequired,
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
  state = {
    newTool: {
      title: "",
      link: "",
      description: "",
      tags: ""
    },
    openModalConfirm: false,
    removeTool: {}
  };
  componentDidMount() {
    const { getToolsRequest } = this.props;
    getToolsRequest();
  }
  handleInputChange = e => {
    this.setState({
      newTool: { ...this.state.newTool, [e.target.name]: e.target.value }
    });
  };
  handleCreateTool = e => {
    e.preventDefault();
    const { createToolRequest } = this.props;
    const { newTool } = this.state;
    createToolRequest(newTool);
  };
  handleChangeModalConfirm = (tool = null) => {
    this.setState({
      openModalConfirm: this.state.openModalConfirm ? false : true,
      removeTool: tool
    });
  };
  handleRemoveTool = () => {
    const { removeToolRequest } = this.props;
    const { removeTool } = this.state;
    if (removeTool) {
      removeToolRequest(removeTool.id);
      this.handleChangeModalConfirm();
    }
  };
  render() {
    const { tools, openToolModal, closeToolModal } = this.props;
    const { newTool, openModalConfirm, removeTool } = this.state;
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
                <a href={tool.link}>{tool.title}</a>
                <button
                  type="button"
                  onClick={() => this.handleChangeModalConfirm(tool)}
                >
                  remover
                </button>
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
            <form onSubmit={this.handleCreateTool}>
              <span>Tool Name</span>
              <input
                type="text"
                name="title"
                value={newTool.title}
                onChange={this.handleInputChange}
              />
              <span>Tool Link</span>
              <input
                type="text"
                name="link"
                value={newTool.link}
                onChange={this.handleInputChange}
              />
              <span>Tool description</span>
              <textarea
                cols="30"
                rows="5"
                name="description"
                value={newTool.description}
                onChange={this.handleInputChange}
              />
              <span>Tags</span>
              <input
                type="text"
                name="tags"
                value={newTool.tags}
                onChange={this.handleInputChange}
              />
              <div>
                <button type="button" onClick={closeToolModal}>
                  Fechar
                </button>
                <button type="submit">Add tool</button>
              </div>
            </form>
          </Modal>
        )}
        {openModalConfirm && (
          <Modal>
            <h1>Remove tool</h1>
            <p>Are you sure want to remove {removeTool.title}</p>
            <div>
              <button onClick={() => this.handleChangeModalConfirm()}>
                Cancel
              </button>
              <button onClick={() => this.handleRemoveTool()}>
                Yes, remove
              </button>
            </div>
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
