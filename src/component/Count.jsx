import React from "react";

const Count = (type) => {
    const countTypes = this.props.movies.filter(movie => movie.media_type === type);
    return countTypes.length;

    return ( 
    <div> 
      movie count: {this.countType('movie')} 
      tv show count: {this.countType('tv')} 
    </div> 
    );
};

export default Count;