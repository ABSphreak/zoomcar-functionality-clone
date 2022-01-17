import DatePicker from 'react-datepicker';

const DatePickerCustom = ({ dateState, setDateState }) => {
	return (
		<div>
			<DatePicker selected={dateState} onChange={date => setDateState(date)} />
		</div>
	);
};

export default DatePickerCustom;
