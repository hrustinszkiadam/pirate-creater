import { weapon } from '../../pirate.type';

interface WeaponProps {
	weapon: weapon;
}

const WeaponFileNames = {
	Kard: 'sword',
	Sörétes: 'blunderbuss',
	Pisztoly: 'pistol',
	Mesterlövészpuska: 'sniper',
};

const Weapon = ({ weapon }: WeaponProps) => {
	const weaponFile = WeaponFileNames[weapon];
	return (
		<img
			src={`/images/weapons/${weaponFile}.png`}
			className='mx-auto h-40 object-contain lg:h-64'
		/>
	);
};

export default Weapon;
