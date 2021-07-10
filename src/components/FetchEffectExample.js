import axios from "axios";
import React, { useEffect, useState } from "react";

export function FetchEffectExample() {
  const [post, setPost] = useState("");
  const [postId, setPostId] = useState(1);
  const [buttonId, setButtonId] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        console.log("res:", res);
        setPost(res.data.title);
      });
  }, [buttonId]);

  return (
    <>
      <input
        type="text"
        value={postId}
        onChange={(e) => {
          setPostId(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setButtonId(postId);
        }}
      >
        Fetch data
      </button>
      <div style={{ width: "auto", height: 200, padding: 200 }}>{post}</div>
    </>
  );
}

export default FetchEffectExample;
