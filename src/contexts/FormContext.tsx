import {
	useContext,
	createContext,
	PropsWithChildren,
	useState,
	useEffect,
} from 'react';
import Pirate, { model, weapon } from '../pirate.type';
import { usePirateContext } from './PirateContext';

const FormContext = createContext({} as any);

export const useFormContext = () => {
	return useContext(FormContext);
};

const FormProvider = ({ children }: PropsWithChildren) => {
	const { pirates, add, update } = usePirateContext();
	const FORM_STEPS = 3;
	const MAX_BOUNTY = 99999999999999;
	const [progress, setProgress] = useState(0);
	const [model, setModel] = useState<model>(1);
	const [weapon, setWeapon] = useState<weapon | null>();
	const [bounty, setBounty] = useState<number | null>(0);
	const [name, setName] = useState('');
	const [hp, setHp] = useState(10);
	const [atk, setAtk] = useState(10);
	const [def, setDef] = useState(10);
	const [sp, setSp] = useState(10);
	const [statPoints, setStatPoints] = useState(200 - hp - atk - def - sp);
	const [canGoNext, setCanGoNext] = useState(true);
	const [formStatus, setFormStatus] = useState<'new' | 'update'>('new');
	const [oldPirate, setOldPirate] = useState<Pirate | null>(null);

	const validateName = () => {
		const nameExists = pirates.some(
			(pirate: Pirate) => pirate.name === name,
		);
		return nameExists;
	};

	const reset = () => {
		setModel(1);
		setName('');
		setBounty(0);
		setWeapon(null);
		setHp(10);
		setAtk(10);
		setDef(10);
		setSp(10);
		setProgress(0);
		setFormStatus('new');
		setOldPirate(null);
	};

	useEffect(() => {
		switch (progress) {
			case 0:
				setCanGoNext(true);
				break;
			case 1:
				if (
					name === '' ||
					bounty! > MAX_BOUNTY ||
					bounty! < 0 ||
					!bounty ||
					!validateName()
				) {
					setCanGoNext(false);
				} else {
					setCanGoNext(true);
				}
				if (bounty! >= 0 && bounty! <= MAX_BOUNTY) setCanGoNext(true);
				break;
			case 2:
				if (!weapon) {
					setCanGoNext(false);
				} else {
					setCanGoNext(true);
				}
				break;
			case 3:
				if (
					statPoints !== 0 ||
					hp < 10 ||
					atk < 10 ||
					def < 10 ||
					sp < 10
				) {
					setCanGoNext(false);
				} else {
					setCanGoNext(true);
				}
				break;
			default:
				break;
		}
	}, [progress, model, name, bounty, weapon, statPoints, hp, atk, def, sp]);

	useEffect(() => {
		setStatPoints(200 - hp - atk - def - sp);
	}, [hp, atk, def, sp]);

	const submitForm = () => {
		const newPirate = {
			model,
			name,
			bounty: bounty!,
			weapon: weapon!,
			hp,
			atk,
			def,
			sp,
		};

		if (formStatus === 'update') update(oldPirate, newPirate);
		else add(newPirate);

		reset();
	};

	const updatePirate = (pirate: Pirate) => {
		setModel(pirate.model);
		setName(pirate.name);
		setBounty(pirate.bounty);
		setWeapon(pirate.weapon);
		setHp(pirate.hp);
		setAtk(pirate.atk);
		setDef(pirate.def);
		setSp(pirate.sp);

		setProgress(1);
		setFormStatus('update');
		setOldPirate(pirate);
	};

	return (
		<FormContext.Provider
			value={{
				FORM_STEPS,
				MAX_BOUNTY,
				progress,
				setProgress,
				model,
				setModel,
				bounty,
				setBounty,
				name,
				setName,
				weapon,
				setWeapon,
				statPoints,
				setStatPoints,
				hp,
				setHp,
				atk,
				setAtk,
				def,
				setDef,
				sp,
				setSp,
				canGoNext,
				submitForm,
				updatePirate,
				formStatus,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
