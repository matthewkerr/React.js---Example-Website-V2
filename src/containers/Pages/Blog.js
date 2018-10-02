import React,{Component} from 'react';
//import axios from '../../axios-interface';

class Blog extends Component {

    state = {
        posts: []
    };

    componentDidMount() {

          let dataURL = "http://adventurehydro.com/wp-json/wp/v2/posts";

          console.log('dataURL' ,dataURL);
            
          fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                console.log('res' ,res);
                this.setState({
                    posts: res
                })
            })
    }

    createMarkup = ( post ) => { 
        return {__html: post}; 
    };

    render() {

        console.log('this.state.posts' ,this.state.posts);

        
        let pagePosts = this.state.posts.map( post => {
            console.log('post.content.rendered' , post.content.rendered );
            return <div  key={post.id} dangerouslySetInnerHTML={this.createMarkup(post.content.rendered)} />
        } )

        return (
            <div className="container">
            <div>{pagePosts}</div>
            </div>
        )
    }
};


export default Blog;