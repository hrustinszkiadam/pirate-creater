import { usePirateContext } from '../../contexts/PirateContext';
import Pirate from '../../pirate.type';
import PirateCard from './PirateCard';

const PirateList = () => {
	const { pirates } = usePirateContext();
	return (
		<div
			className={`grid grid-cols-1 gap-x-16 gap-y-24 ${pirates.length > 1 ? 'lg:grid-cols-2' : ''}`}
		>
			{pirates.map((p: Pirate, idx: number) => {
				return (
					<PirateCard
						key={idx}
						pirate={p}
					/>
				);
			})}
		</div>
	);
};

export default PirateList;
