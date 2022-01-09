import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getImageDetails, updateImage } from '../store/actions/imageActions';
import { 
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarText, 
    Form, 
    FormGroup, 
    Input, 
    Button, 
    Label 
} from 'reactstrap';
import { UPDATE_IMAGE_RESET } from '../store/constants/imageConstants';
import styled from 'styled-components';

function EditImage({ match, history }) {
    const imageId = match.params.id;
    const dispatch = useDispatch();

    const imageDetail = useSelector(state => state.imageDetail);
    const { loading: loadingImageDetails, image: currentImage } = imageDetail;

    const imageUpdate = useSelector(state => state.updateImage);
    const { success: successUpdate } = imageUpdate;

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
                headers: { "Content-Type": "multipart/form-data" },
            };

            const { data } = await axios.post("http://localhost:5000/api/upload", formData, config);
            console.log(data);

            imagesArray.push(`http://localhost:5000${data}`);
            setImages(imagesArray);
            setUploading(false);
        } catch (error) {
            if (error) {
                setUploading(false);
                console.error(error);
            }
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateImage({
            _id: imageId,
            src: images[1],
            alt: altText.alt
        }));
    };

    const goBackHandler = () => {
        history.push("/login");
    }

    useEffect(() => {
        if (successUpdate) {
            dispatch({
                type: UPDATE_IMAGE_RESET,
            })
            history.push('/admin');
        } else {
            if (!currentImage || imageId !== currentImage._id) {
                dispatch(getImageDetails(imageId))
            } else {
                setAltText({ alt: currentImage.alt })
                setImages([currentImage.src])
            }
        }
    }, [dispatch, currentImage, history, imageId, successUpdate])


    const altTextHandler = (e) => {
        const value = e.target.value;
        setAltText({ alt: value });
    }

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    <Lucid>Lucid Thinkers</Lucid> <Span>PHOTOGRAPHY</Span>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className= "me-auto" navbar></Nav>
                    <NavbarText>
                        <Button outline onClick={goBackHandler}>
                            Go Back
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
            <Wrapper>
                {loadingImageDetails ? <div>...loading...</div> :
                    <Container>
                        <Form onSubmit={submitHandler}>
                            <FormGroup>
                                <Label for="alternativeText">Alternative text</Label>
                                <Input
                                    id="alternativeText"
                                    type="text"
                                    value={altText.alt}
                                    onChange={altTextHandler}
                                />
                            </FormGroup>

                            {images && images.map(((item, index) => (
                                <div key={index}>
                                    <img src={item} alt={item} style={{ width: '100px' }} />
                                </div>
                            )))}
                            <FormGroup>
                                <Label>Select an image</Label>
                                <Input
                                    type="file"
                                    onChange={uploadFileHandler}
                                    name={images}
                                />
                            </FormGroup>

                            {uploading && <div>...loading...</div>}
                            
                                <Button secondary type="submit" >Upload</Button>
                            
                        </Form>
                    </Container>
                }
            </Wrapper>
           
        </div>
    )
}

const Wrapper = styled(Container)`
    width: 70%;
    margin-top: 20px;
`
const Lucid = styled.div`
	font-family: fantasy;
	font-size: 30px;
	letter-spacing: -2px;
`
const Span = styled.span`
	letter-spacing: 3px;
`

export default EditImage;