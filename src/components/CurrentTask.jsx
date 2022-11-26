import React, { useEffect, useState } from 'react';

const CurrentTask = (props)=>{
    const {todoList} = props;
    return <div>CurrentTask: {todoList[0]}</div>;
}

export default CurrentTask;