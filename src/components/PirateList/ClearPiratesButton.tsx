import { usePirateContext } from '../../contexts/PirateContext';

const ClearPiratesButton = () => {
	const { clear } = usePirateContext();

	return (
		<button
			className='w-fit rounded-lg border-2 border-orange-950 bg-input-bg px-4 py-2 text-center text-3xl font-bold text-orange-900 lg:text-4xl'
			onClick={clear}
		>
			Összes Törlése
		</button>
	);
};

export default ClearPiratesButton;
