var SearchResults = React.createClass({
    getInitialState: function() {
        return {
            searchResults: []
        }
    },
    
    showResults: function(response){
        this.setState({
            searchResults: response.content
        })
    },
    
    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: URL,
            success: function(response){
                this.showResults(response);
            }.bind(this)
        });
    },
    
    render: function(){
        return (
            <div>
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    }
});

var Results = React.createClass({
    render: function(){
		count = 0;
        var resultItems = this.props.searchResults.map(function(result) {
			count++;
            return <ResultItem key={count} packNumber={result.number} packName={result.name} packSize={result.size} lastModified={result.lastModified} />
        });
        return(
            <tr>
                {resultItems}
            </tr>           
        );
    }
});

var ResultItem = React.createClass({
    render: function(){
        return 
        <td>{this.props.packNumber}</td>
        <td>{this.props.packName}</td>
        <td>{this.props.packSize}</td>
        <td>{this.props.lastModified}</td>;
    }
});




var SearchInit = React.createClass({
    


    showResults: function(response){
        this.setState({
            searchResults: response.content
        })
    },
    
    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: URL,
            success: function(response){
                this.showResults(response);
            }.bind(this)
        });
    },

    render: function(){
        return (
            <div>
                <SearchBox search={this.search} />
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    }


});

var SearchBox = React.createClass({
    
    render: function(){
        return (
            <div>
                <input type="text" ref="query" />
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    },

    createAjax: function(){
        var query    = ReactDOM.findDOMNode(this.refs.query).value;
        var URL      = 'http://dev.nibl.co.uk:8080/nibl/search?query=' + query;
        this.props.search(URL)
    }

});

var BotItem = React.createClass({
    render: function(){
		return <tr><td>{this.props.botName}</td></tr>;
    }
});


ReactDOM.render(<SearchResults />,  document.getElementById("searchResults"));
ReactDOM.render(<SearchInit />,  document.getElementById("searchBox"));

