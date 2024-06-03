import { usePirateContext } from '../contexts/PirateContext';
import ClearPiratesButton from './PirateList/ClearPiratesButton';
import PirateList from './PirateList/PirateList';
import SeparatorLine from './PirateList/SeparatorLine';

const Pirates = () => {
	const { pirates } = usePirateContext();
	if (pirates.length === 0) return null;

	return (
		<section className='relative flex min-h-full min-w-full flex-col items-center gap-5 overflow-x-hidden lg:min-w-[50vw]'>
			<SeparatorLine />
			<h1 className='mt-5 text-7xl font-bold text-orange-950 lg:text-8xl'>
				Kalózok
			</h1>
			<div className='flex flex-col items-center gap-y-14 overflow-y-auto pb-12 scrollbar scrollbar-track-transparent scrollbar-thumb-orange-950 scrollbar-track-rounded-full scrollbar-thumb-rounded-full'>
				<PirateList />
				<ClearPiratesButton />
			</div>
		</section>
	);
};

export default Pirates;
