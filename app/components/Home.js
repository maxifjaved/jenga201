import React from 'react';
import { Link } from 'react-router';
var DataTable = require('react-data-components').DataTable;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            packList: null
        };
    }
    componentWillMount() {
        $.ajax({ url: 'http://dev.nibl.co.uk:8080/nibl/bots' })
            .done(data => {
                var content = data.content;
                this.setState({ content: content });
            })
            .fail(jqXhr => {
                console.log(jqXhr.responseJSON.message);
            });
    }

    componentDidMount() {

    }

    componentWillUnmount() {}

    showBotDetails(bot) {
        $.ajax({ url: 'http://dev.nibl.co.uk:8080/nibl/bots/' + bot.id })
            .done(data => {
                var packList = data.content.packList;
                console.log(data);
                this.setState({ packList: packList });
            })
            .fail(jqXhr => {
                console.log(jqXhr.responseJSON.message);
            });
    }
    searchBot(event) {
        console.log(event.target.value);
        $.ajax({
                url: 'http://dev.nibl.co.uk:8080/nibl/search?query=' + event.target.value,
                dataType: 'json',
            })
            .done(data => {
                var packList = data.content;
                this.setState({ packList: packList });
            })
            .fail(jqXhr => {
                console.log(jqXhr.responseJSON.message);
            });
    }
    render() {
        var columns = [
            { title: '#', prop: 'number' },
            { title: 'Name', prop: 'name' },
            { title: 'Size', prop: 'size' },
            { title: 'Date', prop: 'lastModified' }
        ];

        if (this.state.content) {
            var botsNodes = this.state.content.map((bot, index) => {
                return (
                    <tr key={index} onClick={this.showBotDetails.bind(this, bot)}>
                      <td>{bot.name}</td>
                    </tr>
                );
            });

        }
        if (this.state.packList) {
            var packListNodes = this.state.packList.map((pList, index) => {
                return (
                    <tr key={index}>
                        <td>{pList.number}</td>
                        <td title={pList.name}>{pList.name}</td>
                        <td>{pList.size}</td>
                        <td>{pList.lastModified}</td>
                    </tr>
                );
            });

        }

        return (
            <div>
                        <div>
        {/* header */}
        <div className="header">
          <div className="container">
            <div className="header-info">
              <div className="header-info-left">
                <p>Contrary to, Lorem Ipsum is not simply random text.</p>
              </div>
              <div className="header-info-right">
                <ul>
                  <li><i className="glyphicon glyphicon-earphone" aria-hidden="true" />+1099 909 768</li>
                  <li><a href="mailto:info@example.com"><i className="glyphicon glyphicon-send" aria-hidden="true" />info@example.com</a></li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        <div className="search-logo-icons">
          <div className="container">
            <div className="search">
              <span className="glyphicon glyphicon-search" aria-hidden="true" />
              <div><input id="searchBox" type="text" placeholder="Search Here..." onChange={this.searchBot.bind(this)}/></div>
            </div>
            <div className="logo">
              <h1><a href="index.html">Eternity<span>Beauty is everywhere</span></a></h1>
            </div>
            <div className="social-icons">
              <ul>
                <li><a href="#" className="facebook" /></li>
                <li><a href="#" className="twitter" /></li>
                <li><a href="#" className="p" /></li>
                <li><a href="#" className="be" /></li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* //header */}

        {/* nav */}
      <div className="header-nav">
        <div className="container">
          <nav className="navbar navbar-default">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/">Home</a></li>
                <li className="hvr-overline-from-left"><a href="about.html">About</a></li>
                <li className="hvr-overline-from-left"><a href="services.html">Services</a></li>
                <li className="hvr-overline-from-left"><a href="pages.html">Pages</a></li>
                <li className="hvr-overline-from-left"><a href="blog.html">Blog</a></li>
                <li className="hvr-overline-from-left"><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>
        </div>
      </div>
      {/* //nav */}

      </div>
         <div className="welcome">
        <div className="container">
          <div className="col-lg-12 welcome-left">
            <div className="welcome-grids">
              <div className="col-sm-3 welcome-grid-left">
                <h3 className="bars animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">Bot List</h3>
                <table className="table table-hover" id="allBots">
                  <tbody>
                    {botsNodes}
                  </tbody>
                </table>
                <div className="clearfix"> </div>
              </div>
              <div className="col-lg-9 welcome-grid-left">
                <div className="bs-docs-example animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                  <DataTable
      keys="number"
      columns={columns}
      initialData={this.state.packList}
      initialPageLength={20}
      initialSortBy={{ prop: 'number', order: 'descending' }}
    />
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
        );
    }
}

export default Home;
