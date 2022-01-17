import TimePicker from 'react-time-picker';

const TimePickerCustom = ({ time, setTime }) => {
	return (
		<div>
			<TimePicker onChange={setTime} value={time} />
		</div>
	);
};

export default TimePickerCustom;
