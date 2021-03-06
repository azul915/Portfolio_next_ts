import React from "react";
import { Post } from "../../interfaces";

type Props = {
  posts: Post[];
}

const Blog: React.FC<Props> = (props: Props) => {

  const posts = props.posts;

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.url}>
              <div>{post.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blog