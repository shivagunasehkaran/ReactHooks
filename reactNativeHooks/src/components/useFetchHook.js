import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url).then(x => x.text()).then(y => {
            setState({ data: y, loading: false });
        })
    }, [url]) // service calls based on URL change & remove url here for only one time call

    return state;
};

export default useFetch;