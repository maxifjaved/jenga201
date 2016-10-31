var BotResults = React.createClass({
    render: function(){
		count = 0;
        var resultItems = this.props.botResults.map(function(result) {
			count++;
            return <BotItem key={count} botName={result.name} />
        });
        return(
    		<tbody>
            {resultItems}
            </tbody>
        );
    }
});

var BotsInit = React.createClass({
    
    getInitialState: function() {
    	this.listbots();
        return {
            botResults: []
        }
    },

    showResults: function(response){
        this.setState({
        	botResults: response.content
        })
    },
    
    listbots: function(){
    	console.log("get bots");
    	var URL = 'http://dev.nibl.co.uk:8080/nibl/bots';
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
            <BotResults botResults={this.state.botResults} />
        );
    }
});

ReactDOM.render(<BotsInit />,  document.getElementById("allBots"));