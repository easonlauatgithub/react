import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    const {match} = props;
    console.log("match");
    console.log(match);
    return (
        <div>{JSON.stringify(match)}</div>
    );
}

List.propTypes = {
    match: PropTypes.shape({}),
};

List.defaultProps = {
    match:{},
};

export default List;