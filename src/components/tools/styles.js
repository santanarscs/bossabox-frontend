import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px;

	h2 {
		font-size: 36px;
		line-height: 40px;
		margin-bottom: 20px;
	}
`;
export const ToolsContainerAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	font-size: 18px;
	> div {
		input[type='text'] {
			border-radius: 4px;
			border: 1px solid #ebeaed;
			font-size: 20px;
			line-height: 26px;
			padding: 5px 10px;
			margin-right: 10px;
		}
		input[type='checkbox'] {
			margin-right: 5px;
		}
	}
`;

export const ToolsList = styled.ul`
	list-style: none;
	> li {
		background: #fff;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 5px;
		box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.2);
		&:last-child {
			margin-bottom: 0;
		}
		p {
			line-height: 25px;
		}
	}
`;

export const TitleList = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
	a {
		text-decoration: none;
		color: currentColor;
		font-weight: 700;
	}
`;
export const TagList = styled.ul`
	list-style: none;
	display: flex;
	padding: 10px 0;
	> li {
		margin-right: 10px;
		font-weight: bold;
		&:last-child {
			margin-right: 0;
		}
	}
`;
export const NewToolForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	> span {
		font-size: 20px;
		line-height: 25px;
		font-weight: 600;
		margin-top: 15px;
	}
	> input,
	textarea {
		height: 40px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ebeaed;
		background-color: #f5f4f6;
		color: #170c3a;
		margin-top: 8px;
		transition: border 0.15s ease;
		font-size: 16px;
		&:focus {
			border-color: #dedce1;
		}
	}
	textarea {
		height: auto;
	}
	div {
		display: flex;
		justify-content: flex-end;
		padding: 10px 0;
		> button[type='button'] {
			margin-right: 10px;
		}
	}
`;
export const ConfirmContent = styled.div`
	display: flex;
	flex-direction: column;
	p {
		padding: 20px 0;
	}
	div {
		display: flex;
		justify-content: flex-end;
		> button {
			margin-right: 5px;
		}
	}
`;
