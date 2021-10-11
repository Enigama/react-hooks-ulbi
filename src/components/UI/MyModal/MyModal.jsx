import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
	const rootClass = [cl.MyModal, visible ? cl.active : null];

	return (
		<div
			className={rootClass.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div
				className={cl.MyModalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
