import React from 'react';

const ReceipeResult = ({searchResults}) => {

const receipeResults = searchResults.map( (searchResult) => {
  return  (
  <div key={searchResult.recipe_id}>
  <h2>{searchResult.title}</h2>
  <img className="foodImg" src={searchResult.image_url} />
  <a href={searchResult.source_url} target="_blank" rel="noopener noreferrer"><button className="ui inverted button huge">More Info</button></a>
  </div>
  );
});

	return (
		<div>
		{receipeResults}
		</div>
	)
}

export default ReceipeResult;
