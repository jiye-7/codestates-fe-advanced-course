import React from 'react';

interface IProps {
	name: string;
	email: string;
	body: string;
}

const Comment = ({ name, email, body: content }: IProps): JSX.Element => {
	return (
		<div>
			<h3>{name}</h3>
			<p>{content}</p>
		</div>
	);
};

export default Comment;
