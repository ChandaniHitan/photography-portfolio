import React, { useState, useEffect } from 'react';
import { createBlog, updateBlog }  from '../../store/actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarText, 
    Form, 
    Input, 
    Button
} from 'reactstrap';
import styled from 'styled-components';

function BlogsComponent(props, {history}) {

    const [blogTitle, setBlogTitle] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const dispatch = useDispatch();

    const blogList = useSelector(state => state.blogs);
    const { blogs } = blogList;

    useEffect(() => {
        dispatch(createBlog());
    }, [dispatch])

    const createdBlog = useSelector(state => state.createBlog);
    const {blog} = createdBlog;


    const handleTitleChanged = (e) => {
        const title = e.target.value;
        setBlogTitle(title);
    }

    const handleContentChanged = (e) => {
        const content = e.target.value;
        setBlogContent(content);
    }

    const handleSubmit = (e) => {
        const newBlog = {
            title: blogTitle,
            image: "",
            description: "",
            content: blogContent
        }
        dispatch(updateBlog(newBlog));
    }

    const goBackHandler = (e) => {
        e.preventDefault();
        window.location = '/admin';
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
                 <Form onSubmit={handleSubmit}>
                    
                        <Input
                        name="title"
                        type="text"
                        placeholder={blog.title}
                        onChange = {handleTitleChanged}
                        />
                    
                        <Input
                        name="content"
                        type="textarea"
                        placeholder={blog.content}
                        rows="5"
                        onChange = {handleContentChanged}
                        />
           
                        <Submit>Submit</Submit>
                    
                </Form>

                {blogs.length !== 0 && blogs.map((item, idx) => (
                <div key={idx}>
                    {item.content}
                </div>
            ))}

             </Wrapper> 
        </div>
       
    );
}

const Wrapper = styled(Container)`
    width: 70%;
    padding-top: 10px;
`
const Submit = styled(Button)`
    margin-top: 5px;
`
const Lucid = styled.div`
	font-family: fantasy;
	font-size: 30px;
	letter-spacing: -2px;
`
const Span = styled.span`
	letter-spacing: 3px;
`

export default BlogsComponent;