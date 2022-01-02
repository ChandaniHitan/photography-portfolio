import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getImageDetails, updateImage} from '../../store/actions/imageActions';
import { Container, Button, File } from './StyledEditImage';

import {UPDATE_IMAGE_RESET} from '../../store/constants/imageConstants';

function EditImage ({match, history}){
    const imageId = match.params.id;
    const dispatch = useDispatch();

    const imageDetail = useSelector(state => state.imageDetail);
    const {loading: loadingImageDetails, image:currentImage} = imageDetail;

    const imageUpdate = useSelector(state => state.updateImage);
    const {success:successUpdate} = imageUpdate;

    const [altText, setAltText] = useState({});
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const imagesArray = [];

    for (let key in images) {
        imagesArray.push(images[key])
    };

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {"Content-Type": "multipart/form-data"},
            };

            const { data } = await axios.post("http://localhost:5000/api/upload", formData, config);
            console.log(data);

            imagesArray.push(`http://localhost:5000${data}`);
            setImages(imagesArray);
            setUploading(false);
        } catch(error){
            if(error) {
                setUploading(false);
                console.error(error);
            }
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateImage({
            _id: imageId,
            src: images,
            alt: altText.alt
        }));
    };

    useEffect(() => {
        if (successUpdate) {
            dispatch({
                type: UPDATE_IMAGE_RESET,
            })
            history.push('/admin');
        } else {
            if(!currentImage || imageId !== currentImage._id){
                dispatch(getImageDetails(imageId))
            }  else {
                setAltText({alt: currentImage.alt})
                setImages(currentImage.src)
            }
        }
    }, [dispatch, currentImage, history, imageId, successUpdate])


    const altTextHandler = (e)=> {
        const value = e.target.value;
        setAltText({alt: value});
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <Container>
                    <input 
                        type= "text"
                        onChange = {altTextHandler}
                    />
                    {images && images.map(((item, index) => (
                        <div key={index}>
                            <img src={item} alt={item} />
                        </div>
                    )))}
                    <File>
                         <input 
                            type= "file"
                            onChange = {uploadFileHandler}
                            name = {images}
                        />
                    </File>
                   
                    <Button>
                         <input type="submit" value="Upload"/>
                    </Button>
                   
                </Container>       
            </form>    
        </div>
    )
}

export default EditImage;