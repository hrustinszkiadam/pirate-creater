import { useFormContext } from '../../contexts/FormContext';
import FormLabel from './FormLabel';

const NameField = () => {
	const { name, setName } = useFormContext();

	return (
		<div className='m-auto lg:m-0'>
			<FormLabel>Név</FormLabel>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Jack Sparrow'
				className='bg-input-bg w-80 rounded-lg border-2 border-orange-950 p-2 text-center text-4xl text-orange-950 placeholder:text-orange-950 placeholder:opacity-35 lg:w-96 lg:text-5xl'
			/>
		</div>
	);
};

export default NameField;
