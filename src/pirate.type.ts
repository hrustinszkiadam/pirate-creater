type model = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type weapon = 'Kard' | 'Sörétes' | 'Pisztoly' | 'Mesterlövészpuska';

type Pirate = {
	model: model;
	name: string;
	bounty: number;
	weapon: weapon;
	hp: number;
	atk: number;
	def: number;
	sp: number;
};

const isPirate = (obj: any): obj is Pirate => {
	return (
		typeof obj.name === 'string' &&
		typeof obj.bounty === 'number' &&
		typeof obj.hp === 'number' &&
		typeof obj.atk === 'number' &&
		typeof obj.def === 'number' &&
		typeof obj.sp === 'number' &&
		[1, 2, 3, 4, 5, 6, 7].includes(obj.model) &&
		['Kard', 'Sörétes', 'Pisztoly', 'Mesterlövészpuska'].includes(
			obj.weapon,
		)
	);
};

export default Pirate;
export type { model, weapon };
export { isPirate };
