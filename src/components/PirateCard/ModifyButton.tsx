import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface ModifyButtonProps {
	onClick: () => void;
}
const ModifyButton = ({ onClick }: ModifyButtonProps) => {
	return (
		<button
			className='flex h-full w-full items-center justify-center bg-blue-500 bg-opacity-15 hover:cursor-pointer hover:bg-opacity-25'
			onClick={onClick}
		>
			<PencilSquareIcon className='h-12 w-12 text-white' />
		</button>
	);
};

export default ModifyButton;
