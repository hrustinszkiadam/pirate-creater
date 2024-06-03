import { PropsWithChildren } from 'react';

const FormLabel = ({ children }: PropsWithChildren) => {
	return <h2 className='mb-1 text-5xl text-orange-950'>{children}</h2>;
};

export default FormLabel;
