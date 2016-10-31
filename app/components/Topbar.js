import React, { Component } from 'react';
import { Link } from 'react-router';

class Topbar extends Component {
    checkout() {
        HomeActions.deleteProducts(HomeStore.state.cartItemId);
    }
    render() {
        return (
            <div></div>


        );
    }
}

export default Topbar;
