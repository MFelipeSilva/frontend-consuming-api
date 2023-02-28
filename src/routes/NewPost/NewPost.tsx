import React, { PointerEventHandler, useState } from "react";
import { Container, Formulary } from "./styles";

import { useNavigate } from "react-router-dom";
import { postFetch } from "../../assets/axios/config";

export const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e: any) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await postFetch.post("/posts", {
      body: post,
    });

    navigate("/")
  };

  const newTitle = (e: any) => {
    setTitle(e.currentTarget.value);
  };

  const newBody = (e: any) => {
    setBody(e.currentTarget.value);
  };

  return (
    <Container>
      <h2>INSERT NEW POST</h2>

      <Formulary action="" onSubmit={(e) => createPost(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Type it title"
            onChange={newTitle}
          />
        </div>
        <div>
          <label htmlFor="body">Content:</label>
          <textarea
            name="body"
            id="body"
            onChange={newBody}
            placeholder="Type it content"
          ></textarea>
        </div>
        <input type="submit" value="Create post" />
      </Formulary>
    </Container>
  );
};
