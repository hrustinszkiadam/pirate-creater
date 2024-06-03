import { XMarkIcon } from '@heroicons/react/24/outline';

interface DeleteButtonProps {
	onClick: () => void;
}
const DeleteButton = ({ onClick }: DeleteButtonProps) => {
	return (
		<button
			className='flex h-full w-full items-center justify-center bg-red-500 bg-opacity-15 hover:cursor-pointer hover:bg-opacity-25'
			onClick={onClick}
		>
			<XMarkIcon className='h-12 w-12 text-white' />
		</button>
	);
};

export default DeleteButton;
