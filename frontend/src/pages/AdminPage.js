import React, { useEffect } from 'react';
import {
    Container,
    Button,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavbarText,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/userActions';
import { POST_IMAGE_RESET } from '../store/constants/imageConstants';
import styled from 'styled-components';

import {
    getImages,
    postImage,
    deleteImage
} from '../store/actions/imageActions.js';

function AdminPage({ history }) {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const blogList = useSelector(state => state.blogs);
    const { blogs } = blogList;

    const imagePost = useSelector(state => state.postImage);
    const { image: postedImage, success: successPostImage } = imagePost;

    const imageList = useSelector(state => state.images);
    const { images: gallery } = imageList;

    const imageDelete = useSelector(state => state.deleteImage);
    const { loading: imageDeleteLoading, success: imageDeleteSuccess } = imageDelete;


    useEffect(() => {
        dispatch({
            type: POST_IMAGE_RESET
        });
        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login');
        }

        dispatch(getImages(null, 100));

        if (successPostImage) {
            history.push(`/admin/image/${postedImage._id}/edit`)
        }
    }, [dispatch, history, userInfo, successPostImage, postedImage, imageDeleteSuccess]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        history.push('/login');
    }

    const uploadImage = (e) => {
        e.preventDefault();
        dispatch(postImage());
    }

    const deleteImageHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteImage(id));
        }
    };

    const editImageHandler = (id) => {
        if (id) {
            history.push(`/admin/image/${id}/edit`);
        }
    };

    const uploadBlog = (e) => {
        e.preventDefault();
        history.push('/blogcreate')
    }

    return (
        <Container fluid>
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
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Button outline onClick={uploadBlog}>
                                Upload new blog
                            </Button>
                        </NavItem>
                        <NavItem
                            style={{ paddingLeft: "10px" }}
                        >
                            <Button outline onClick={uploadImage}>
                                Add new image
                            </Button>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button outline onClick={handleLogout}>
                            Sign out
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
            <div>
                {!gallery ? (
                    <div>...loading</div>
                ) : (
                    <ImageListWrapper>
                        {
                            gallery.map((item, idx) =>
                                <ImageWrapper key={idx} >
                                    <Image
                                        alt={item.alt}
                                        src={item.src}
                                        width="300px"
                                        height="auto"
                                    />
                                    <ButtonWrapper>
                                        <DeleteButton outline onClick={() => deleteImageHandler(item._id)}>Delete</DeleteButton>
                                        <Button outline onClick={() => editImageHandler(item._id)}>Edit</Button>
                                    </ButtonWrapper>
                                </ImageWrapper>
                            )
                        }
                    </ImageListWrapper>
                )}
                {imageDeleteLoading && <div>...loading...</div>}
            </div>
        </Container>
    );
}

export default AdminPage;

const ImageListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 2vmin;
`;

const ImageWrapper = styled.li`
    margin: 2vmin;
    list-style-type: none;
`;

const Image = styled.img`
    max-height:100%,
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    border-radius: 1vmin;
`;

const ButtonWrapper = styled.div`
    padding: 5px;
    display: flex;
`;

const DeleteButton = styled(Button)`
    margin-right: 5px;
`
const Lucid = styled.div`
	font-family: fantasy;
	font-size: 30px;
	letter-spacing: -2px;
`
const Span = styled.span`
	letter-spacing: 3px;
`

