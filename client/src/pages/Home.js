import React, { Component } from 'react';
// import Header from '../components/Header/Header'

const styles = {
    heading: {
      textAlign: 'center'
    }
  }

class HomePage extends Component {
    render () {
        return (
            <div>
                <h1 style={styles.heading}>Trading Board Home Page</h1>
                {/* <Header /> */}
            </div>
        )
    }
}

export default HomePage;