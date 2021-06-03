const fs = require("fs");
const chalk = require("chalk")
const addTask = (title, description, type) => {
  //Lấy ds task đang có
  const allTasks = fetchTask();
  //tạo đối tượng task
  const task = {
    id: Math.round(Math.random() * 10000).toString(),
    title,
    description,
    type,
  };
  // thêm task vào danh sách
  allTasks.push(task);
  //lưu lại ds vào file
  fs.writeFileSync("task.json", JSON.stringify(allTasks));

};
const deleteTask = (id) => {
  // 1. lay danh sach
  const allTasks = fetchTasks();
  // 2. tim vi tri
  const index = allTasks.findIndex((task) => {
    return task.id === id;
  });
  if (index === -1) {
    console.log(chalk.red('Task not found'));  
    return};
  allTasks.splice(index, 1);
  // 3. luu lai file JSON
  fs.writeFileSync("task.json", JSON.stringify(allTasks));
  console.log(chalk.green('Delete successfully')); 
};

const fetchTasks = () => {
  try {
    const buffer = fs.readFileSync("task.json");
    console.log(buffer);
    const tasksJSON = buffer.toString();
    return JSON.parse(tasksJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  addTask,
  deleteTask,
  // khi trung ten thi dc viet ngan gon lai
};
