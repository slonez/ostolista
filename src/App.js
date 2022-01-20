import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const [item, setItem] = useState({name: ''});
  const [items, setItems] = useState([]);
  
  const inputChanged = (e) => {
    setItem({...item, [e.target.name]: e.target.value});
  }

  const addList = () => {
    setItems([...items, item])
    setItem({name: ''});
  }

  const deleteItem = (row) => {
    setItems(items.filter((item, i) => i !== row));
  }
  
  return (
    <Box sx={{
      width: 1,
      display: 'flex',
      flexDirection: 'column', 
    }}>
      <Input sx={{p:1, mr: 3}} name="name" value={item.name} onChange={inputChanged} placeholder="Kirjoita tuote.."/>
      <Button onClick={addList} variant="contained">Lisää</Button>
      <List>
        {items.map((item, i) => (
          
           <ListItem key={i} >
              <ListItemText primary={item.name} />    
              <IconButton edge="end" onClick={() => deleteItem(i)}>
                <DeleteIcon/>  
              </IconButton>
           </ListItem>
            ))}
        </List>
        
    </Box>
  );
}

export default App;
