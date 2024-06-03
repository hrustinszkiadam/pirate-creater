import { useFormContext } from '../../contexts/FormContext';

const NextButton = () => {
	const {
		canGoNext,
		progress,
		setProgress,
		FORM_STEPS,
		submitForm,
		formStatus,
	} = useFormContext();

	const handleClick = () => {
		if (progress <= FORM_STEPS - 1) {
			setProgress((prev: number) => prev + 1);
		} else {
			submitForm();
		}
	};

	return (
		<button
			className={`${
				canGoNext ? 'bg-input-bg' : 'cursor-not-allowed bg-gray-400'
			} w-40 rounded-lg border-2 border-orange-950 px-4 py-2 text-center text-3xl font-bold text-white lg:text-4xl`}
			onClick={handleClick}
			disabled={!canGoNext}
		>
			{progress <= FORM_STEPS - 1
				? 'Következő'
				: formStatus === 'update'
					? 'Mentés'
					: 'Hozzáadás'}
		</button>
	);
};

export default NextButton;
