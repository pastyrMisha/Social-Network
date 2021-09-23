import React from 'react';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToogleImportant, onToogleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                  <PostListItem 
                  {...itemProps}
                  onDelete={() => onDelete(id)}
                  onToogleImportant={() => onToogleImportant(id)}
                  onToogleLiked={() => onToogleLiked(id)}/>
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;