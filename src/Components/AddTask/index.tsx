/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionTitle } from '../SectionTitle';
import * as S from './styles'
function AddTask(props: any) {  
const { newToDo, setNewToDo, newDescription, setNewDescription, addToDo} = props;
    return (
        <S.Container>
            <SectionTitle>Add new to do</SectionTitle>
            <div className="form">
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
                <button onClick={addToDo}>Create Todo</button>
            </div>
        </S.Container>
    )
}

export default AddTask

