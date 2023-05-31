import React from "react";
import styles from "./index.module.sass";
import { sliceStr } from "../../utils";
import { ITask } from "../../interfaces/task";

const Task = ({ task, onChange }: { task: ITask; onChange?: () => void }) => (
  <div className={styles.Task} onClick={onChange}>
    <h3 className={[styles.name, styles?.[task.status]].join(" ")}>
      {sliceStr(task.name, 25)}
    </h3>
    <span className={styles.status}>{task.status}</span>
  </div>
);

export default Task;
