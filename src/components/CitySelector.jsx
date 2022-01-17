import { useState } from 'react';

const CitySelector = ({ setGlobalCity }) => {
	const [cities] = useState(['Chennai', 'Bangalore', 'Mumbai', 'Delhi']);

	return (
		<div>
			<select onChange={e => setGlobalCity(e.target.value)}>
				{cities.map((city, index) => (
					<option key={index} value={city}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
};

export default CitySelector;
