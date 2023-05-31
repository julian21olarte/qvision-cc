import React, { useState } from "react";
import styles from "./index.module.sass";
import { TextField, Button } from "@mui/material";
import Task from "../task";
import { ITask } from "../../interfaces/task";

const App = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const onChangeTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([
        { id: new Date().getTime(), name: taskName, status: "pending" },
        ...tasks,
      ]);
      setTaskName("");
    }
  };

  const onMarkTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "pending" ? "done" : "pending" }
          : task
      )
    );
  };

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <p className={styles.title}>TODO list APP</p>
      </header>
      <section className={styles.container}>
        <div className={styles.controls}>
          <TextField
            value={taskName}
            label="Task Name"
            id="add-task-input"
            className={styles.input}
            onChange={onChangeTaskName}
          />
          <Button
            data-testid="add-task-btn"
            className={styles.button}
            onClick={addTask}
          >
            Add Task
          </Button>
        </div>
        <div className={styles.tasks}>
          <h3 className={styles.tasksTitle}>Tasks</h3>
          {tasks.length === 0 ? (
            <span>Not tasks to show</span>
          ) : (
            tasks.map((task) => (
              <Task
                task={task}
                key={`task-${task.id}`}
                onChange={() => onMarkTask(task.id)}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
