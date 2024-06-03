import { useFormContext } from '../../contexts/FormContext';
import Weapon from './Weapon';
import { weapon } from '../../pirate.type';

const weapons: weapon[] = ['Kard', 'Sörétes', 'Pisztoly', 'Mesterlövészpuska'];

const Weapons = () => {
	const { weapon, setWeapon } = useFormContext();

	return (
		<div className='w-[95%]'>
			<h2 className='mb-3 text-center text-3xl text-orange-950 lg:text-4xl'>
				(Kard, Sörétes, Pisztoly, Mesterlövészpuska)
			</h2>
			<div className='grid grid-cols-2 gap-2 lg:gap-4'>
				{weapons.map((w, i) => (
					<div
						key={i}
						onClick={() => setWeapon(w)}
						className={`cursor-pointer rounded-lg ${
							weapon === w
								? 'border-4 border-orange-950'
								: 'border-4 border-gray-300'
						}`}
					>
						<Weapon weapon={w} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Weapons;
