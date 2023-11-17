/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
let toDoList = [];

app.get('/gettask', (req, res) => {
    res.json({
        toDoList: toDoList,
    });
});
app.post('/addtask', (req, res) => {
    const { ToDo } = req.body;

    if (ToDo) {
        const newToDo = {
            id: ToDo.id,
            title: ToDo.title,
            description: ToDo.description,
            date: ToDo.date,
        };

        toDoList.push(newToDo);

        res.json({
            success: true,
            message: 'Tarefa adicionada com sucesso!',
            newToDo: newToDo,
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'O corpo da requisição deve conter uma propriedade "novaData".',
        });
    }
});

app.delete('/deletetask/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    console.log('taskId: ', taskId);
    // const index = toDoList.findIndex((toDo) => {console.log('toDo.id: ', toDo.id); toDo.id === taskId});
    const index = toDoList.findIndex((toDo) => toDo.id === taskId);
    
    if (index !== -1) {
        const deletedToDo = toDoList.splice(index, 1)[0];

        res.json({
            success: true,
            message: 'Tarefa excluída com sucesso!',
            deletedToDo: deletedToDo,
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Tarefa não encontrada com o ID fornecido.',
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
