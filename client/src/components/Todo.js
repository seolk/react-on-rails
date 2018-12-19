import React from 'react';
import { Header, Button, Icon, Checkbox } from 'semantic-ui-react';

const styles = {
  flex: {
    display: 'flex',
    alignIems: 'center',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  },
}

const Todo = ({ id, complete, name, updateTodo, deleteTodo }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
        defaultChecked={complete}
        onClick={() => updateTodo(id)}
      />

      <div style={complete ? styles.complete : {} } className='center'>
        <Header style={{marginLeft: "15px"}}>{name}</Header>
      </div>
    </div>

    <Button 
      icon
      color="red"
      size="small"
      onClick={() => deleteTodo(id)}
      style={{marginLeft: "16px"}}
    >
      <Icon name="trash" />    
    </Button>
  </div>
)

export default Todo;