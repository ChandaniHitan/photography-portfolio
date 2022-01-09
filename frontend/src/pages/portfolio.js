import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImages } from '../store/actions/imageActions';
import NavbarComponent from '../components/NavbarComponent';
import styled from 'styled-components';
import {
    Container
} from 'reactstrap';

function Portfolio() {

    const dispatch = useDispatch();

    const imageList = useSelector(state => state.images);
    const { images: gallery } = imageList;

    useEffect(() => {
        dispatch(getImages(null, 100));
    }, [dispatch]);

   return (
        <Container fluid>
            <NavbarComponent />
                <Unordered>
                    {gallery && gallery.map((item, idx) =>
                        <List key={idx}>
                        <Image 
                            alt={item.alt}
                            src={item.src}
                            width="340px"
                            height="auto"
                        /> 
                        </List>
                        )}  
                </Unordered>  
        </Container>
    )
}

const Unordered = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-between;
    line-height: 0;
    column-count: 4;
    column-gap: 0;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    display: inline-block;
    margin-right: auto;
    margin-left: auto;

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
         {
            flex-direction: row;
        }
`
const List = styled.li`
    list-style: none;
    padding: 1px;
       
    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        height: auto;
        width: 100%;
    }
`
const Image = styled.img`
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    
    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        width: 100%;
        max-height: 75vh;
        min-width: 0;
    };
    &:hover {
        transform: scale(1.5);
    }
`
export default Portfolio;
