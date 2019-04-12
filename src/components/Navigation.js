import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

class Navigation extends Component {
    state = {
        value: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ 
            value: value 
        });
        this.props.onChange(event, value)
    };
    render() { 
        const { classes } = this.props;
        const { value } = this.state;

        return (  
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
            >
                <BottomNavigationAction label="Canada" value="ca" />
                <BottomNavigationAction label="Thailand" value="th" />
                <BottomNavigationAction label="Search Result" value="" />
                <BottomNavigationAction label="United States" value="us" />
                <BottomNavigationAction label="Japan" value="jp" />
            </BottomNavigation>
        );
    }
}
 
export default Navigation;