import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    //useEffect for term
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            //set DebouncedTerm to term
            setDebouncedTerm(term);
        }, 1000);

        //return a cleanup function to cancel above function
        return() => {
            clearTimeout(timerId);
        };
    }, [term]);

    //only wants to run whenever the component is first rendered or debouncedTerm changes    
    useEffect(()=>{
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                },
            });
            //update the results piece of state right after getting the data
            setResults(data.query.search);
        };
        if (debouncedTerm) {
            search();
        }

    }, [debouncedTerm]);

    

    const renderedResults = results.map((result)=>{
        
        return (
            <div 
                className="item"
                key={result.pageid}
            >
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}                    
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input" 
                        value={term}
                        onChange={(e)=> setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;