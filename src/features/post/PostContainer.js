import { useCallback, useEffect, useMemo, useState } from "react";
import PostCreateToggle from "./PostCreateToggle";
import PostList from "./PostList";
import * as postApi from "../../apis/post-api";

export default function PostContainer() {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await postApi.getAllPostIncFriend(); //ดึงข้อมูลpostทุกคนมาจาก backend
      setPosts(res.data.posts); // set state
    };
    fetchPost();
  }, []);

  // const createPost = (newPost) => {
  //   setPosts([newPost, ...posts]);
  // };

  const filteredPost = useMemo(
    () => posts.filter((el) => el.title?.includes(searchTitle)),
    [searchTitle, posts]
  );

  const createPost = useCallback((newPost) => {
    // setPosts([newPost, ...posts])
  }, []);

  return (
    <div className="mx-auto py-4 max-w-152">
      <div className="mx-2 d-flex flex-column gap-3">
        <PostCreateToggle createPost={createPost} />
        <PostList posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}
