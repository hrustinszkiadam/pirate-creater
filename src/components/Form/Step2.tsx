import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import StepWrapper from './StepWrapper';
import Weapons from './Weapons';

const Step2 = () => {
	return (
		<StepWrapper>
			<h1 className='text-center text-5xl font-bold text-orange-950 lg:text-6xl'>
				Válassz Fegyvert !
			</h1>
			<Weapons />
			<div className='flex w-full items-center justify-between px-10 lg:w-[75%]'>
				<PreviousButton />
				<NextButton />
			</div>
		</StepWrapper>
	);
};

export default Step2;
