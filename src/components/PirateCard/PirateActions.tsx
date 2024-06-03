import { useFormContext } from '../../contexts/FormContext';
import { usePirateContext } from '../../contexts/PirateContext';
import Pirate from '../../pirate.type';
import DeleteButton from './DeleteButton';
import ModifyButton from './ModifyButton';

interface PirateActionsProps {
	pirate: Pirate;
}

const PirateActions = ({ pirate }: PirateActionsProps) => {
	const { name } = pirate;
	const { remove } = usePirateContext();
	const { updatePirate } = useFormContext();

	return (
		<div className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-200 hover:opacity-100'>
			<div className='flex h-24 max-h-24 w-full flex-grow items-center justify-between bg-gray-900 bg-opacity-50'>
				<ModifyButton onClick={() => updatePirate(pirate)} />
				<DeleteButton onClick={() => remove(name)} />
			</div>
		</div>
	);
};

export default PirateActions;
