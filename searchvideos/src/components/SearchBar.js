import React from 'react';

class SearchBar extends React.Component{

    state = {term : ""};

    onTermChanged = (event) =>
    {
        this.setState({term:event.target.value});
    }

    onFormSubmit = (event) =>
    {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render()
    {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.onTermChanged}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;