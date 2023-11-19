/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionTitle } from '../SectionTitle';
import { useForm } from "react-hook-form"
import * as S from './styles'

type Inputs = {
    newToDo: string;
    newDescription: string;
  };

function AddTask(props: any) {  
    const { newToDo, setNewToDo, newDescription, setNewDescription, addToDo} = props;
    const {
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    return (
        <S.Container>
            <SectionTitle>Add new to do</SectionTitle>
            <form className="form" onSubmit={handleSubmit(addToDo)}>
                <label>Task Name :</label>
                <input
                type="text"
                value={newToDo}
                maxLength={20}
                onChange={(e) => setNewToDo(e.target.value)}
                placeholder='Insira o nome da nova tarefa...'
                />
                <label>Task Name :</label>
                <input
                type="text"
                maxLength={35}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder='Insira a descrição da nova tarefa...'
                />
                <button type="submit">Create Todo</button>
            </form>
        </S.Container>
    )
}

export default AddTask

