import React from 'react';
import { connect } from 'react-redux';


class SongList extends React.Component {

	render() {
		//this.props = {songs: state.songs}
			console.log(this.props);
	return(
		<div>song list</div>

		)
}
}

const mapStateToProps = (state) => {
return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);
