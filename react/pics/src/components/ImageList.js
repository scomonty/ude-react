import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

//to destructure - replace (image) with ({urls, id, description}) and can remove image. from return statement

const ImageList = (props) => {
	const images = props.img.map((image) => {
			return <ImageCard key={image.id} image={image} />
	});

return (
<div className="ImageList">{images}</div>
	)
}


export default ImageList;
