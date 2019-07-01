import styled, { css } from 'styled-components';

const sizes = {
	small: css`
		font-size: 12px;
		padding: 5px 10px;
	`,
	default: css`font-size: 14px;`,
	big: css`font-size: 18px;`
};
const colors = {
	default: css`
		background: #365df0;
		&:hover {
			background: #2f55cc;
		}
	`,
	danger: css`
		background: #f95e5a;
		&:hover {
			background: #cc4c4c;
		}
	`,
	gray: css`
		background: #b9bbbe;
		color: #666;
		&:hover {
			background: #999;
		}
	`
};

const Button = styled.button.attrs({
	type: 'button'
})`
	border-radius: 5px;
	transition: background-color 0.15s ease;
	background: #365df0;
	border: 0;
	color: #fff;
	font-size: 18px;
	padding: 10px 20px;
	${props => sizes[props.size || 'default']};
	${props => colors[props.color || 'default']};
	${props =>
		props.filled === false &&
		css`
			background: none;
			&:hover {
				background: none;
				opacity: 0.6;
			}
		`};
`;

export default Button;
