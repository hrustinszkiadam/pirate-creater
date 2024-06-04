import Pirate, { isPirate } from '../pirate.type';

const useLocalStorage = () => {
	const getPirates = (): Array<Pirate> => {
		const pirates = localStorage.getItem('pirates');
		if (pirates) {
			return JSON.parse(pirates).filter(isPirate);
		}
		return [];
	};

	const addPirate = (pirate: Pirate): void => {
		const pirates = getPirates();
		pirates.push(pirate);
		localStorage.setItem('pirates', JSON.stringify(pirates));
	};

	const removePirate = (name: string): void => {
		const pirates = getPirates();
		const newPirates = pirates.filter(
			(pirate: Pirate) => pirate.name !== name,
		);
		localStorage.setItem('pirates', JSON.stringify(newPirates));
	};

	const updatePirate = (pirate: Pirate, idx: number): void => {
		const pirates = getPirates();
		const newPirates = [...pirates];
		newPirates[idx] = pirate;
		localStorage.setItem('pirates', JSON.stringify(newPirates));
	};

	const clearPirates = (): void => {
		localStorage.removeItem('pirates');
	};

	return {
		getPirates,
		addPirate,
		removePirate,
		updatePirate,
		clearPirates,
	};
};

export default useLocalStorage;
