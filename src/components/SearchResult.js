import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loading, NoMatch } from "../components";
import { Posts } from "../components";
import { getPosts, filterPosts } from "../features/postsSlice/postsSlice";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { isLoading, noMatch, searchTerm } = useSelector(
    (store) => store.searchform
  );
  const { loading, posts, hasError } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (hasError) {
    return <NoMatch />;
  }

  return (
    <section>
      <ul>
        {posts.map((post) => {
          return <Posts key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default SearchResult;
