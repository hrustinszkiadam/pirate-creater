import BountyField from './BountyField';
import ModelSelector from './ModelSelector';
import NameField from './NameField';
import NextButton from './NextButton';
import StepWrapper from './StepWrapper';

const Step1 = () => {
	return (
		<StepWrapper>
			<ModelSelector />
			<NameField />
			<BountyField />
			<NextButton />
		</StepWrapper>
	);
};

export default Step1;
