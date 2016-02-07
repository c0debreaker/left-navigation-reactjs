import React from 'react';
import ReactDOM from 'react-dom';
import LeftNavigation from './leftnavigation.jsx';

// let Menus = undefined;
let Menus = [
  { text: 'Main Menu 1', icon: 'settings_input_composite'},
  { text: 'Main Menu 2', icon: 'mic_off'},
  { text: 'Main Menu 3', icon: 'queue_play_next'},
  { text: 'Main Menu 4', icon: 'play_circle_filled'},
  { text: 'Main Menu 5', icon: 'video_library'}
];

let ListStyles = {
  backgroundColor: '#7AAAC5',
  width: 200
}

ListStyles = undefined

let innerDivStyle = {
  paddingLeft: 20,
  paddingTop: 10,
  paddingBottom: 7
}

ReactDOM.render(
  <div>
    <div>
      <h3>Let's override left navigation styles</h3>
      <LeftNavigation Menus={Menus} ListStyles={ListStyles} innerDivStyle={innerDivStyle}/>
    </div>
    <hr/>
    <div>
      <h3>This is the same left navigation component but no properties have been passed</h3>
      <LeftNavigation/>
    </div>
  </div>,
  document.getElementById('app')
);

