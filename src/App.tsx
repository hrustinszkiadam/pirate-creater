import FormProvider from './contexts/FormContext';
import PirateForm from './components/PirateForm';
import Pirates from './components/Pirates';
import PirateProvider from './contexts/PirateContext';

const App = () => {
	return (
		<div className='flex h-screen w-screen flex-col overflow-x-hidden bg-pirate lg:flex-row lg:overflow-hidden'>
			<PirateProvider>
				<FormProvider>
					<PirateForm />
					<Pirates />
				</FormProvider>
			</PirateProvider>
		</div>
	);
};

export default App;
