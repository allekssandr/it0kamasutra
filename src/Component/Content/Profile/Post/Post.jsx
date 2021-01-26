import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    const {post} = props;
    return (
        <div>
            <div>
                <img className={s.img} src={'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'} />
                <span>{post.message}</span>
                <div>
                    like {post.like}
                </div>
            </div>
        </div>
    )
}

export default Post;