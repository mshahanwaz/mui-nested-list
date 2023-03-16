import { ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

export default function NestedList({ data }) {
  const [openItems, setOpenItems] = React.useState({});

  const handleClick = (item) => {
    setOpenItems({
      ...openItems,
      [item.name]: !!(item.children && !openItems[item.name]),
    });
  };

  return (
    <List sx={{ width: '300px' }}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={() => handleClick(item)}>
            <ListItemText>{item.name}</ListItemText>
            {item.children &&
              item.children.length > 0 &&
              (!openItems[item.name] ? <ChevronRight /> : <ExpandMore />)}
          </ListItemButton>
          {item.children && item.children.length > 0 && (
            <Collapse
              sx={{ ml: '20px' }}
              in={openItems[item.name]}
              timeout="auto"
              unmountOnExit
            >
              <NestedList data={item.children} />
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
