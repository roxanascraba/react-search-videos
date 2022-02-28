import React, {Component} from "react";

class SearchBar extends Component {
    state = { 
        term: ''
    }
    
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // make sure your call the cb from parent component(App)
        this.props.onFormSubmit(this.state.term);
    }

    render() { 
        return (
            <div className="searchBar ui segment">
                <form 
                    onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input 
                            type="text"
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;