import React from 'react';
import ImgsViewer from 'react-images-viewer'

const Slider = ({ open, onClose, imgSet, position, setPosition }) => {

	const nextSlide = () => {
		setPosition(prev => prev + 1);
	}

	const prevSlide = () => {
		setPosition(prev => prev - 1);
	}

	const handleClose = (event) => {
		onClose();
	};

	return (
		<ImgsViewer
			imgs={imgSet}
			currImg={position}
			isOpen={open}
			onClickPrev={prevSlide}
			onClickNext={nextSlide}
			onClose={handleClose.bind(this)}
			backdropCloseable={true}
			showImgCount={false}
      />
	);
}

export default Slider;
