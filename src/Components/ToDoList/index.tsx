/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { format } from 'date-fns';
import ToDo from '../ToDoItem'
import {ToDoProps} from '../../utils/ToDoProps'
import Counter from '../Counter';
import AddTask from '../AddTask';
import * as S from './styles'
import { SectionTitle } from '../SectionTitle';

function ToDoList() {  
  const [toDos, setToDos] = useState<ToDoProps[]>([]);
  const [newToDo, setNewToDo] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const savedToDo = localStorage.getItem('someKey');
  
    if (savedToDo) {
      const parsedToDo = JSON.parse(savedToDo);
      setToDos(parsedToDo);
    }
  }, []); 
  
  const addToDo = () => {
    if (newToDo.trim() === '') return;
    const currentDate = new Date();
    const formattedDate = format(currentDate, "d MMMM yyyy 'at' hh:mm a");
    const toDo: ToDoProps = {
      id: Date.now(),
      date: formattedDate,
      title: newToDo,
      description: newDescription,
    };
    const newToDos = [...toDos, toDo];
    localStorage.setItem('someKey', JSON.stringify(newToDos));  
    setToDos(newToDos);
    setNewToDo('');
    setNewDescription('');
  };
  
  
  const deleteTodo = (id: number) => {
    const existingToDos = JSON.parse(localStorage.getItem('someKey') || '[]');

    const updatedToDos = existingToDos.filter((toDo: ToDoProps) => toDo.id !== id);

    localStorage.setItem('someKey', JSON.stringify(updatedToDos));

    setToDos(updatedToDos);

    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <S.Container>
      <section className='toDoList'>
        <SectionTitle>To do</SectionTitle>
        <div className='ContainerList'>
          <ul >
            {toDos.map((toDo) => (
                <li key={toDo.id}>
                  <ToDo
                    title={toDo.title}
                    description={toDo.description}
                    dateTime={toDo.date}
                    onClickButton={() => deleteTodo(toDo.id)}
                  />
                </li>
            ))}
          </ul>
        </div>
      </section>
      <div className='RightSection'>
        <Counter counter={counter}/>
        <AddTask 
          newToDo={newToDo}
          setNewToDo={setNewToDo}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          addToDo={addToDo}
        />
      </div>
    </S.Container>
  )
}

export default ToDoList

