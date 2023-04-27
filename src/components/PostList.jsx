import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostList = () => {
    const [post, setPost] = useState("");
    const [author, setAuthor] = useState("");
    const [modalIsVisible, setModalIsVisible] = useState(true);

    const postChangeHandler = (event) => {
        setPost(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    };


    const hideModalHandler = () => {
        setModalIsVisible(false)
    }


    return (
        <>
            {modalIsVisible && <Modal onClose={hideModalHandler}>
                <NewPost
                    onPostChange={postChangeHandler}
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>}

            <ul className={classes.posts}>
                <Post author={author} text={post} />
                <Post author="Bola" text="Hello Javacript my fav" />
            </ul>
        </>
    );
};
export default PostList;
