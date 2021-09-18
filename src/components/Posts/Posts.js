import React from 'react';

const Posts = ({posts, loading}) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <ul className="mb-4">
                {posts.map(post => (
                    <li key={post.id} className="tw-border tw-p-1" >
                        {post.title}
                    </li>
                ))
                }
            </ul>
        </>
    );
};

export default Posts;