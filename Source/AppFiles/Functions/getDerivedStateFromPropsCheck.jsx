const getDerivedStateFromPropsCheck = (array, props, state) => {
    let update = false;

    array.map( keyName => {
        if(state[keyName] !== props[keyName]){
            update = true;
        }
    });

    return update;
};

export default getDerivedStateFromPropsCheck;