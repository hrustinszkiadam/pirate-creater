interface NewPirateButtonProps {
	onClick: () => void;
}
const NewPirateButton = ({ onClick }: NewPirateButtonProps) => {
	return (
		<button
			className='rounded-md bg-orange-950 p-4 text-4xl font-semibold tracking-wider text-white'
			onClick={onClick}
		>
			Új Kalóz Létrehozása
		</button>
	);
};

export default NewPirateButton;
