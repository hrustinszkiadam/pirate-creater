import { useFormContext } from '../../contexts/FormContext';
import FormLabel from './FormLabel';

const BountyField = () => {
	const { bounty, setBounty, MAX_BOUNTY } = useFormContext();
	return (
		<div className='m-auto lg:m-0'>
			<FormLabel>Fejpénz (HUF)</FormLabel>
			<input
				type='number'
				value={bounty}
				onChange={(e) =>
					setBounty(
						parseInt(e.target.value) > MAX_BOUNTY
							? MAX_BOUNTY
							: parseInt(e.target.value),
					)
				}
				min={0}
				max={MAX_BOUNTY}
				className='bg-input-bg w-80 rounded-lg border-2 border-orange-950 p-2 text-center text-4xl text-orange-950 placeholder:text-orange-950 placeholder:opacity-35 lg:w-96 lg:text-5xl'
			/>
		</div>
	);
};

export default BountyField;
