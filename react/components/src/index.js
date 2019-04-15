import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
			<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="Sam" time="3:00pm today" message="nice blog post" />
				</ApprovalCard>
				<ApprovalCard>
				<CommentDetail author="Steve" time="12:45pm yesterday" message="i like the layout" />
				</ApprovalCard>
				<ApprovalCard>
				<CommentDetail author="kevin" time="12:23pm Saturday" message="I love cheese" />
				</ApprovalCard>
			</div>
		)
}

ReactDOM.render(
<App />,
document.querySelector('#root')
);
