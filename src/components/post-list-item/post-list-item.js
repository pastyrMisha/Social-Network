import React, {Component}  from 'react';

import './post-list-item.sass';


export default class PostListItem extends Component {


 

    render() {
            const {label, onDelete, onToogleImportant, onToogleLiked, important, like} = this.props;
            
            let classNames = 'app-list-item d-flex justify-content-between d-inline-block';
            
            if (important) {
                classNames +=' important';
            }

            if (like) {
                classNames +=' like';
            }

                return (
                    <div className={classNames}>
                        <span
                         className="app-list-item-label"
                         data-toggle="tooltip" 
                         title="Мне Нравится"
                         onClick={onToogleLiked}>
                            {label}
                        </span>
                        <div className="d-flex justify-content-center align-items-center">
                            <button 
                            type="button"
                            className="btn-star btn-sm"
                            data-toggle="tooltip"
                            title="Добавить в избранное"
                            onClick={onToogleImportant}>
                                <i className="fa fa-star"></i>
                            </button> 
                            <button 
                            type="button"
                            className="btn-trash btn-sm"
                            data-toggle="tooltip"
                            title="Удалить запись"
                            onClick={onDelete}>
                                <i className="fa fa-trash-o" ></i>
                            </button> 
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                )
    }
}