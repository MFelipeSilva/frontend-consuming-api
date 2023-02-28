import { postFetch } from "../../assets/axios/config";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, PostsContent } from "./styles";

export const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const getPosts = async () => {
    try {
      const res = await postFetch.get("/posts");

      const data = res.data

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <h1>CURRENT POSTS</h1>
      {posts.length === 0 ? (<p>Loading...</p>) : (
        posts.map((post) => ( 
          <PostsContent key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>Read more</Link>
          </PostsContent>
        ))
      )}
    </Container>
  )
};
