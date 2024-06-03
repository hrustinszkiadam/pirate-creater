import PirateImage from '../PirateCard/PirateImage';
import Pirate from '../../pirate.type';
import formatBounty from '../../helpers/formatBounty';
import PirateActions from '../PirateCard/PirateActions';

interface PirateCardProps {
	pirate: Pirate;
}
const PirateCard = ({ pirate }: PirateCardProps) => {
	const { model, name, bounty, weapon, hp, def, atk, sp } = pirate;
	const formattedBounty = formatBounty(bounty);

	return (
		<div className='bg-fill relative h-[36rem] w-[20rem] rounded-sm bg-pirate-card bg-cover bg-no-repeat p-3'>
			<PirateActions pirate={pirate} />
			<div className='flex flex-col items-center'>
				<PirateImage pirateImage={model} />
				<h2 className='my-2 text-5xl'>{name}</h2>
				<h3 className='text-3xl'>{formattedBounty} HUF</h3>
				<h3 className='text-4xl'>{weapon}</h3>
				<div className='mt-5 grid grid-cols-2 grid-rows-2 text-xl'>
					<p>ÉLET: {hp}</p>
					<p>VÉDELEM: {def}</p>
					<p>TÁMADÁS: {atk}</p>
					<p>GYORSASÁG: {sp}</p>
				</div>
			</div>
		</div>
	);
};

export default PirateCard;
