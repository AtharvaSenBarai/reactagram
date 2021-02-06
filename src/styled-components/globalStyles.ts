import styled from 'styled-components';
import { NavbarContentWrapper } from './navbarStyles';

export const ReactagramTextWrapper = styled.div`
	display: flex;
	${NavbarContentWrapper} & {
		font-size: 33px;
	}
`;

export const ReactagramText = styled.div`
	font-family: 'Grand Hotel', cursive;
	font-size: 60px;
	user-select: none;
`;

export const ReactagramLink = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-evenly;
	background: none;
	color: #3d6ec9;
	font-weight: 600;
	white-space: break-spaces;
	cursor: pointer;
`;

export const GithubLink = styled.a`
	margin-top: 20px;
	cursor: pointer;
	color: #3d6ec9;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
`;

export const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	justify-content: space-evenly;
	height: 100%;
`;

export const FormInput = styled.input`
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: calc((0.1em + 0.4vmin) + (0.1em + 0.4vmax));
	text-align: center;
	background: #fafafa;
	${NavbarContentWrapper} & {
		@media (max-width: 768px) {
			display: none;
		}
	}
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
`;
