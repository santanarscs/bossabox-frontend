import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';

import Modal from '../Modal';

import ToolsActions from '../../store/ducks/tools';
import {
	Container,
	ToolsContainerAction,
	ToolsList,
	TitleList,
	TagList,
	NewToolFormContainer,
	ConfirmContent
} from './styles';

import Button from '../../styles/components/Button';
import { DebounceInput } from 'react-debounce-input';

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
			title: '',
			link: '',
			description: '',
			tags: ''
		},
		search: {
			term: '',
			tagsOnly: false
		},
		openModalConfirm: false,
		removeTool: {}
	};
	componentDidMount() {
		const { getToolsRequest } = this.props;
		getToolsRequest();
	}
	componentDidUpdate(prevProps, prevState) {
		const { getToolsRequest } = this.props;
		const { search } = this.state;
		if (search.term !== prevState.search.term) {
			getToolsRequest(search);
		}
	}
	handleInputSearchTermChange = e => {
		this.setState({ search: { ...this.state.search, term: e.target.value } });
	};
	handleInputTagsOnlyChange = e => {
		this.setState({ search: { ...this.state.search, tagsOnly: e.target.checked } });
	};
	handleInputChange = e => {
		this.setState({
			newTool: { ...this.state.newTool, [e.target.name]: e.target.value }
		});
	};
	handleCreateTool = (data, { resetForm }) => {
		const { createToolRequest } = this.props;
		const { newTool } = this.state;
		createToolRequest(newTool);
		resetForm();
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
		const schema = Yup.object().shape({
			title: Yup.string().required('Title is required'),
			link: Yup.string().required('Link is required'),
			description: Yup.string().required('Description is required')
		});
		const { tools, openToolModal, closeToolModal } = this.props;
		const { newTool, openModalConfirm, removeTool, search } = this.state;
		return (
			<Container>
				<h1>VUTTR</h1>
				<h2>Very Useful Tools to Remember</h2>
				<ToolsContainerAction>
					<div>
						<DebounceInput
							type="text"
							placeholder="search"
							name="term"
							minLength={2}
							debounceTimeout={500}
							value={search.term}
							onChange={this.handleInputSearchTermChange}
						/>
						<input
							type="checkbox"
							name="tagsOnly"
							checked={search.tagsOnly}
							onChange={this.handleInputTagsOnlyChange}
						/>
						search in tags only
					</div>
					<Button size="big" onClick={openToolModal}>
						<i className="fas fa-plus" /> Add
					</Button>
				</ToolsContainerAction>
				<ToolsList>
					{tools.data.map(tool => (
						<li key={tool.id}>
							<TitleList>
								<a href={tool.link}>{tool.title}</a>
								<Button size="small" color="danger" onClick={() => this.handleChangeModalConfirm(tool)}>
									<i className="fas fa-times" />
								</Button>
							</TitleList>
							<p>{tool.description}</p>
							<TagList>{tool.tags.map(tag => <li key={`${Math.random()}-${tag}`}>#{tag}</li>)}</TagList>
						</li>
					))}
				</ToolsList>
				{tools.toolModalOpen && (
					<Modal>
						<h1>
							<i className="fas fa-plus" /> Add new tool{' '}
						</h1>
						<NewToolFormContainer>
							<Form onSubmit={this.handleCreateTool} schema={schema}>
								<label>Tool Name</label>
								<Input
									type="text"
									name="title"
									value={newTool.title}
									onChange={this.handleInputChange}
								/>
								<label>Tool Link</label>
								<Input type="text" name="link" value={newTool.link} onChange={this.handleInputChange} />
								<label>Tool description</label>
								<Textarea
									cols="30"
									rows="5"
									name="description"
									value={newTool.description}
									onChange={this.handleInputChange}
								/>
								<label>Tags</label>
								<Input type="text" name="tags" value={newTool.tags} onChange={this.handleInputChange} />
								<div>
									<Button color="gray" onClick={closeToolModal}>
										Fechar
									</Button>
									<Button type="submit">
										<i className="fas fa-plus" /> Add tool
									</Button>
								</div>
							</Form>
						</NewToolFormContainer>
					</Modal>
				)}
				{openModalConfirm && (
					<Modal>
						<h1>Remove tool</h1>
						<ConfirmContent>
							<p>Are you sure want to remove {removeTool.title}?</p>
							<div>
								<Button color="gray" onClick={() => this.handleChangeModalConfirm()}>
									Cancel
								</Button>
								<Button color="danger" onClick={() => this.handleRemoveTool()}>
									Yes, remove
								</Button>
							</div>
						</ConfirmContent>
					</Modal>
				)}
			</Container>
		);
	}
}
const mapStateToProps = state => ({
	tools: state.tools
});
const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Tools);
