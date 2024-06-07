import PreviousButton from './PreviousButton';
import StepWrapper from './StepWrapper';
import StatField from './StatField';
import { useFormContext } from '../../contexts/FormContext';
import NextButton from './NextButton';

const Step3 = () => {
	const { statPoints, hp, setHp, atk, setAtk, def, setDef, sp, setSp } =
		useFormContext();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setter: Function,
	): void => {
		setter(parseInt(e.target.value) > 99 ? 99 : parseInt(e.target.value));
	};

	return (
		<StepWrapper>
			<h1 className='text-center text-5xl font-bold text-orange-950 lg:text-6xl'>
				{isNaN(statPoints)
					? 'Ossz el ? pontot !'
					: statPoints > 0
						? `Ossz el ${statPoints} pontot !`
						: statPoints === 0
							? 'Elosztottad az összes pontot!'
							: `${-statPoints} ponttal túllépted a határt!`}
			</h1>
			<div className='mt-10 flex w-full flex-col items-center justify-center gap-y-7'>
				<StatField
					label='Élet'
					value={hp}
					onChange={(e) => handleChange(e, setHp)}
				/>
				<StatField
					label='Támadás'
					value={atk}
					onChange={(e) => handleChange(e, setAtk)}
				/>
				<StatField
					label='Védelem'
					value={def}
					onChange={(e) => handleChange(e, setDef)}
				/>
				<StatField
					label='Gyorsaság'
					value={sp}
					onChange={(e) => handleChange(e, setSp)}
				/>
			</div>
			<div className='flex w-full items-center justify-between px-10 lg:w-[75%]'>
				<PreviousButton />
				<NextButton />
			</div>
		</StepWrapper>
	);
};

export default Step3;
