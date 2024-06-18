/*
📋 Task
Imagine you have two files: tasks.txt, which contains a list of existing tasks, and new-task.txt, 
which includes a single task that must be added to the tasks.txt file.
Follow these steps to complete the challenge and create the real deal on your machine:
Prepare Your Workspace: Start by creating a new folder on your machine and open it using your favorite code editor.
Setup Tasks: Create the tasks.txt file and populate it with the following tasks or use the provided tasks.txt file:
Teach a goldfish 🐠 to play chess ♟️.
Build a sandcastle 🏰 in your living room 🛋️.
Create a song 🎶 using only sounds from nature 🌿.
Define New Task: Create the new-task.txt file and insert the following task or use the provided new-task.txt file:
Invent a new dance move and perform it in public. 💃🕺

*/




const fs = require('fs').promises;

fs.readFile('new_task.txt', 'utf-8') // new_task.txt content is stored in content
    .then(content => {return fs.appendFile('tasks.txt', content + '\n')})
    .catch((error) => {console.log('some error')});

