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

export default Pirate;
export type { model, weapon };
