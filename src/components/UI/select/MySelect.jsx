import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onChange}) => {
	return (
		<select
			className={classes}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			<option disabled value="">{defaultValue}</option>
			{
				options.map((option) => (
					<option value={option.value} key={option.value}>{option.name}</option>
				))
			}
		</select>
	);
};

export default MySelect;
