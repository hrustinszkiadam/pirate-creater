import { useFormContext } from '../../contexts/FormContext';

const PreviousButton = () => {
	const { progress, setProgress } = useFormContext();

	const handleClick = () => {
		if (progress > 0) {
			setProgress((prev: number) => prev - 1);
		}
	};

	return (
		<button
			className={`bg-input-bg w-40 rounded-lg border-2 border-orange-950 px-4 py-2 text-center text-3xl font-bold text-white lg:text-4xl`}
			onClick={handleClick}
		>
			Előző
		</button>
	);
};

export default PreviousButton;
