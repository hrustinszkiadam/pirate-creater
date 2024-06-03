import { PropsWithChildren } from 'react';

const StepWrapper = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex max-h-full w-full flex-col items-center justify-center gap-y-7 lg:gap-y-14'>
			{children}
		</div>
	);
};

export default StepWrapper;
