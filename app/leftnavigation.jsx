import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import FontIcon from 'material-ui/lib/font-icon';

const itemStyle = {
  width: 235
};

const textStyle = {
  top: -7,
  marginLeft: 5,
  display: 'inline',
  position: 'relative'
};

const onClick = function(t) {
  alert(t+' was clicked');
}

const leftIcon = (props) => {
  return <FontIcon className='material-icons'>{props.icon}</FontIcon>
}

const primary = (props) => {
  return <div>{leftIcon(props)} <p style={textStyle}>{props.text}</p></div>
}

const LeftNavigation = (props) => {

  let Menus = [
    { text: 'Menu 1', icon: 'assignment'},
    { text: 'Menu 2', icon: 'folder_open'},
    { text: 'Menu 3', icon: 'find_in_page'},
    { text: 'Menu 4', icon: 'settings'},
    { text: 'Menu 5', icon: 'history'}
  ];

  let ListStyles = {
    backgroundColor: '#ffffff',
    width: '100%'
  }

  Menus = (props.Menus) ? props.Menus : Menus;
  ListStyles = (props.ListStyles) ? props.ListStyles : ListStyles;

  let listItem = Menus.map((dataVal, i) => <ListItem style={{itemStyle, ...props.itemStyle}} key={i} primaryText={primary(dataVal)} onClick={() => onClick(dataVal.text)}/>);
  return (
    <List style={ListStyles}>
      {listItem}
    </List>
    )
}

export default LeftNavigation;
