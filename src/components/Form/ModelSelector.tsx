import { useFormContext } from '../../contexts/FormContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import FormLabel from './FormLabel';
import { model as M } from '../../pirate.type';

const MIN_MODEL = 1;
const MAX_MODEL = 7;

const ModelSelector = () => {
	const { model, setModel } = useFormContext();
	const increment = () => {
		if (model < MAX_MODEL) {
			setModel((prev: M) => prev + 1);
		} else {
			setModel(MIN_MODEL);
		}
	};

	const decrement = () => {
		if (model > MIN_MODEL) {
			setModel((prev: M) => prev - 1);
		} else {
			setModel(MAX_MODEL);
		}
	};

	return (
		<div className='text-center'>
			<FormLabel>Karakter</FormLabel>
			<div className='flex flex-grow select-none flex-row items-center justify-center gap-x-1 md:gap-x-3'>
				<ChevronLeftIcon
					className='h-10 w-10 cursor-pointer'
					onClick={decrement}
				/>
				<img
					src={`/images/pirate-models/${model}.png`}
					className='h-64 rounded-md lg:h-72'
					loading='lazy'
				/>
				<ChevronRightIcon
					className='h-10 w-10 cursor-pointer'
					onClick={increment}
				/>
			</div>
		</div>
	);
};

export default ModelSelector;
