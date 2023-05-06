import { useState } from 'react';
import * as C from './App.style';
import { InputItem } from './Components/InputItem';
import { ListItem } from './Components/ListItem';
import { itemListType } from './types';

function App() {
  
    const [itemList, setItemList] = useState<itemListType[]>([
      {id: 1, title: 'Tarefa Exemplo', done: false}
    ]);
  
    const taskName = (name: string) => {
      let newList = [...itemList];
      newList.push({
        id: itemList.length + 1,
        title: name,
        done: false
      });

      setItemList(newList);
    }

    const deleteItem = (idx: number) => {
      let newList = [...itemList];
      newList.splice((newList.findIndex((user)=> user.id === idx)), 1);
      setItemList(newList);
    }

  return (
      <C.Container>
          <C.Header>
            Lista de Tarefas
          </C.Header>
          <C.Main>
              <InputItem onEnter={taskName}/>
              
              <C.ListArea>
                  {itemList.map((item, index)=>(
                      <ListItem item={item} key={index} onClickDelete={deleteItem}/>
                  ))}
              </C.ListArea>
          </C.Main>
      </C.Container>
    );
}

export default App;
