import React from 'react';
import ThirdPartySection from './thirdparty.jsx';
import ThirdPartySection2 from './thirdparty2.jsx';
import ThirdPartySection3 from './thirdparty3.jsx';

const App = React.createClass({
  getInitialState() {
    return {
      overrideThirdPartyStyle: {}
    }
  },
  onChange() {
    let overrideThirdPartyStyle = {
      backgroundColor: 'black',
      color: 'white'
    }

    this.setState({overrideThirdPartyStyle: overrideThirdPartyStyle});
  },
  resetStyles() {
    this.setState({overrideThirdPartyStyle: {}});
  },
  render() {
    let buttonStyle = {
      padding: 10
    }
    let buttonStyle2 = {
      padding: 10,
      marginLeft: 10,
      marginBottom: 10
    }
    return (
      <div>
        <h2>Overriding 3rd Party Component's CSS Styles using ReactJS</h2>
        <div>
          <button style={buttonStyle} onClick={this.onChange}>Send CSS styles to third party components</button>
          <button style={buttonStyle2} onClick={this.resetStyles}>Undo</button>
          <ThirdPartySection style={this.state.overrideThirdPartyStyle}/><br/>
          <ThirdPartySection2 style={this.state.overrideThirdPartyStyle}/><br/>
          <ThirdPartySection3 style={this.state.overrideThirdPartyStyle}/>
        </div>
      </div>
      )
  }
})

export default App;
