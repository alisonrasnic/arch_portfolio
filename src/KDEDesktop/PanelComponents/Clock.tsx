import {useState, useEffect} from 'react';

const Clock: React.FC<Props> = () => {
	const [time, setTime] = useState(new Date());

	useEffect( () => {
			
			const interval = setInterval( () => {
					setTime(new Date());
				}, 1000);
			
				return () => clearInterval(interval);
		}, []
	);

	return (
		<div className="clock-component">{time.toLocaleTimeString('en-US')}</div>
	);
};

export {Clock};
