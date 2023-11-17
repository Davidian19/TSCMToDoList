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
import axios from 'axios';

function ToDoList() {  
  const [toDos, setToDos] = useState<ToDoProps[]>([]);
  const [newToDo, setNewToDo] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  
  useEffect(() => {
    if (newToDo) {
      fetchToDo();
    }
  }, []);
  const fetchToDo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/gettask');
      const {todoItem} = response.data.toDoList;
      setToDos(todoItem);
    } catch (error) {
      console.error('Erro ao obter a lista de tarefas:', error);
    }
  };
  const addToDo = async () => {
    if (newToDo.trim() === '') return;
    const currentDate = new Date();
    const formattedDate = format(currentDate, "d MMMM yyyy 'at' hh:mm a");
    const toDo: ToDoProps = {
      id: Date.now(),
      date: formattedDate,
      title: newToDo,
      description: newDescription,
    };
    console.log('Enviando requisição para a API...');
    try {
      const { data: response } = await axios.post('http://localhost:3000/addtask', { ToDo: toDo });
      console.log('Resposta da API:', response);
      const newToDos = [...toDos, toDo];
      setToDos(newToDos);
      setNewToDo('');
      setNewDescription('');
    } catch (error) {
      console.error('Erro na requisição para a API:', error);
    }
  };
  
  
  
  const deleteTodo = async (id: number) => {
    const existingToDos = JSON.parse(localStorage.getItem('someKey') || '[]');

    const updatedToDos = existingToDos.filter((toDo: ToDoProps) => toDo.id !== id);
    setToDos(updatedToDos);
  
    try {
      console.log('xxxx ', id);
      await axios.delete(`http://localhost:3000/deletetask/${id}`);
      setCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error('Erro ao deletar a tarefa:', error);
    }
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

