import React from 'react';

const Comments = ({comments}) => {
	return (
		<div>
			<h4>Comments:</h4>
			{comments.map(item => (
				<div key={item.id}>
					<strong>{item.name}</strong>
					<div>{item.body}</div>
					<div style={{color: 'gray'}}>{item.email}</div>
				</div>
			))}
		</div>
	);
};

export default Comments;
