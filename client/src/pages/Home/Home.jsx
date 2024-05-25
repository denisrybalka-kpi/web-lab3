import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Navigation from "../../components/Navigation/Navigation";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShareIdeas from "../../components/ShareIdeas/ShareIdeas";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import CreatePostModal from "../../modals/CreatePost";
import useModal from "../../hooks/useModal";
import { useMutation } from "react-query";
import { fetchPosts } from "../../utils/requests";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { openModal, closeModal, isModalOpen } = useModal();
  const fetchMutation = useMutation(fetchPosts, {
    onSuccess: (data) => {
      setPosts(data);
    },
  });

  useEffect(() => {
    fetchMutation.mutate();
  }, []);

  return (
    <>
      <section className='container mt-4' style={{ marginBottom: "100px" }}>
        <div className='row'>
          <div className='col-lg-8'>
            {posts.map((post) => (
              <Post {...post} />
            ))}
            <Navigation />
          </div>

          <div className='col-lg-4'>
            <SearchBar />

            <ShareIdeas openAddPostModal={() => openModal("addPostModal")} />

            <PopularCategories />
          </div>
        </div>
      </section>

      <CreatePostModal
        opened={isModalOpen("addPostModal")}
        onClose={() => closeModal("addPostModal")}
      />
    </>
  );
};

export default Home;
