import React from 'react';


const Test = ({ name }) => {
    
    return (
        <div>
        hi , {name}
        </div>
    );
};

Test.defaultProps = {
    name : 'sda'
};

export default Test;
