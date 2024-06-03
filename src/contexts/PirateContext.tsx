import { useContext, createContext, PropsWithChildren, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Pirate from '../pirate.type';

const PirateContext = createContext({} as any);

export const usePirateContext = () => {
	return useContext(PirateContext);
};

const PirateProvider = ({ children }: PropsWithChildren) => {
	const { addPirate, getPirates, clearPirates, removePirate, updatePirate } =
		useLocalStorage();
	const [pirates, setPirates] = useState<Pirate[]>(getPirates());

	const refresh = () => setPirates(getPirates());

	const add = (pirate: Pirate) => {
		addPirate(pirate);
		refresh();
	};

	const clear = () => {
		clearPirates();
		refresh();
	};

	const remove = (name: string) => {
		removePirate(name);
		refresh();
	};

	const update = (old: Pirate, updated: Pirate) => {
		const idx = pirates.findIndex((p: Pirate) => p.name === old.name);
		updatePirate(updated, idx);
		refresh();
	};

	return (
		<PirateContext.Provider value={{ pirates, add, clear, remove, update }}>
			{children}
		</PirateContext.Provider>
	);
};

export default PirateProvider;
