import React from 'react';
import Faker from 'faker';


const CommentDetail = (props) =>{
return (
<div className="comment">
			<a className="avatar" href="/">
			<img alt="avatar" src={Faker.image.avatar()} />
			</a>
			<div className="content">
			<a href="/" className="author">{props.author}</a>
			<div className="metadata"><span className="date">{props.time}</span>
			</div>
			<div className="text">{props.message}</div>
			</div>
			</div>
	)
}

export default CommentDetail;
