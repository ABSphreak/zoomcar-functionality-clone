import { useState, useEffect, createContext } from 'react';
import CitySelector from './CitySelector';
import DatePickerCustom from './DatePickerCustom';
import TimePickerCustom from './TimePickerCustom';
import { carsAvailable } from './mock/cars';

export const AppContext = createContext({});

const HomeComponent = () => {
	const [globalCity, setGlobalCity] = useState();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [startTime, setStartTime] = useState();
	const [endTime, setEndTime] = useState();
	const [cars, setCars] = useState([]);

	useEffect(() => {
		console.log();
		const gotCars = carsAvailable?.filter(car => {
			const startDateFormatted = `${startDate?.getDate()}/${startDate?.getMonth() + 1}/${startDate?.getFullYear()}`;
			const endDateFormatted = `${endDate?.getDate()}/${endDate?.getMonth() + 1}/${endDate?.getFullYear()}`;

			if (car?.city === globalCity) {
				if (car.availability.dates > 0) {
					car.availability.dates.filter(item => {
						if (item === startDateFormatted) {
							console.log('matched');
							return true;
						}
						return false;
					});
				}
				return false;
			}
			return false;
		});
		setCars(gotCars);
	}, [globalCity, startDate, endDate, startTime, endTime]);

	return (
		<main className="home-container">
			<AppContext.Provider
				value={{
					globalCity,
				}}></AppContext.Provider>

			<CitySelector setGlobalCity={setGlobalCity} />

			<div className="selected-city">{globalCity}</div>

			<section className="controls">
				<div>
					<div>
						Set Journey Date
						<DatePickerCustom dateState={startDate} setDateState={setStartDate} />
					</div>

					<div>
						Set Drop Date
						<DatePickerCustom dateState={endDate} setDateState={setEndDate} />
					</div>
				</div>

				<div>
					{' '}
					<div>
						Set Start Time
						<TimePickerCustom time={startTime} setTime={setStartTime} />
					</div>
					<div>
						Set End Time
						<TimePickerCustom time={endTime} setTime={setEndTime} />
					</div>
				</div>
			</section>

			<div>
				<ul className="cars-list">
					{cars?.map(car => (
						<li className="car-card" key={car.id}>
							<div className="car-image">
								<img src={car.imgUrl} alt={car.model} />
							</div>
							<div className="car-info">{car.maker}</div>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default HomeComponent;
