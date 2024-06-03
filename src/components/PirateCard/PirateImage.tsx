import { model } from '../../pirate.type';

interface PirateImageProps {
	pirateImage: model;
}
const PirateImage = ({ pirateImage }: PirateImageProps) => {
	const src = `images/pirate-models/${pirateImage}.png`;

	return (
		<img
			src={src}
			className='h-[20rem] w-[17rem] pt-[5.4rem]'
		/>
	);
};

export default PirateImage;
