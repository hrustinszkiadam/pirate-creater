import FormLabel from './FormLabel';

interface StatFieldProps {
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const StatField = ({ label, value, onChange }: StatFieldProps) => {
	return (
		<div className='m-auto lg:m-0'>
			<FormLabel>{label}</FormLabel>
			<input
				type='number'
				value={value}
				onChange={onChange}
				min={10}
				max={99}
				className='w-80 rounded-lg border-2 border-orange-950 bg-input-bg p-2 text-center text-4xl text-orange-950 placeholder:text-orange-950 placeholder:opacity-35 lg:w-96 lg:text-5xl'
			/>
		</div>
	);
};

export default StatField;
