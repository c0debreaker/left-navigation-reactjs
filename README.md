This is an example of a navigation menu written in ReactJS

### Installation
```
git clone git@github.com:c0debreaker/left-navigation-reactjs.git
```

```
npm install
```

### Starting the application as a standalone
```
npm start
```

### As a plain component into your existing application

```
// Install

npm install --save git+ssh://git@github.com:c0debreaker/left-navigation-reactjs.git


// In your file where you want to use the component

import LeftNavigation from 'left-navigation/app/leftnavigation.jsx';

ReactDOM.render(
  <LeftNavigation/>
  document.getElementById('app')
);



```

### Overriding the LeftNavigation component

```
// Install

npm install --save git+ssh://git@github.com:c0debreaker/left-navigation-reactjs.git


// In your jsx where you want to use the component

import LeftNavigation from 'left-navigation/app/leftnavigation.jsx';

let Menus = [
  { text: 'Composite Settings', icon: 'settings_input_composite'},
  { text: 'Audio/Mic Off', icon: 'mic_off'},
  { text: 'Queue Play Next', icon: 'queue_play_next'},
  { text: 'Play Circle Filled', icon: 'play_circle_filled'},
  { text: 'Video Library', icon: 'video_library'}
];

let ListStyles = {
  backgroundColor: '#7AAAC5',
  width: 235
}

ReactDOM.render(
  <LeftNavigation Menus={Menus} ListStyles={ListStyles}/>
  document.getElementById('app')
);

```
