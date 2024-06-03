import { useFormContext } from '../contexts/FormContext';
import NewPirateButton from './Form/NewPirateButton';
import Step1 from './Form/Step1';
import Step2 from './Form/Step2';
import Step3 from './Form/Step3';
const PirateForm = () => {
	const { progress, setProgress } = useFormContext();

	return (
		<section className='flex min-h-full w-full flex-col items-center justify-center'>
			{progress === 0 && (
				<NewPirateButton onClick={() => setProgress(1)} />
			)}
			{progress === 1 && <Step1 />}
			{progress === 2 && <Step2 />}
			{progress === 3 && <Step3 />}
		</section>
	);
};

export default PirateForm;
