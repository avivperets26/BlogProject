import React from 'react';
import { Jumbotron, Container, Accordion, Button, InputGroup, FormControl } from 'react-bootstrap';
import Post from './blog-components/post'
import Navbar from './navbar'

class Blog extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
        posts: null
       }
       this.redirectToAddPost = this.redirectToAddPost.bind(this)
   }

    componentDidMount() {
        fetch('/posts/', {
            method: 'GET'
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                posts: data
            })
            console.log(this.state.posts[0])
        }).catch(error => {
            console.log(error)
        })
    }

   redirectToAddPost = () => {
    this.props.history.push(`/addPost`);
   }

    render() {
        return (
            <>
            <Navbar/>
                <Container className="text-center">
                    <Jumbotron fluid>
                            <h1>Welcome!</h1>
                            <p>
                            In this blog you can share with the network everything you want!
                            </p>
                    </Jumbotron>
                    <br/>
                    <InputGroup size="sm search">
                        <InputGroup.Prepend className='d-flex justify-content-center'>
                        <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small"/>
                    </InputGroup>
                    <br/>
                    <div className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={this.redirectToAddPost}>Add new post</Button>
                    </div>
                </Container>
                <Accordion>
                    <Post />
                    {/* {this.state.posts.map(post => (post))} */}
                </Accordion>
            </>
        );
    };
};

export default Blog