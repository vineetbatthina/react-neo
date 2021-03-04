import React,{ useState , useEffect} from 'react';
import axios from 'axios';

const Search = () =>
{
    const [term, setTerm] = useState('avengers');
    const [results,setResults] = useState([]);

    console.log(results);

    useEffect(() =>
    {
        const searchWiki = async () =>
        {
           const {data} =  await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin: '*',
                    format:'json',
                    srsearch: term,
                }
            });

            setResults(data.query.search);
        };
        searchWiki();
    }, [term]);


    const renderedResults = results.map((result) =>{
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html : result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label>Search:</label>
                <input 
                value={term}
                onChange={e => setTerm(e.target.value)}
                className="input"
                />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;