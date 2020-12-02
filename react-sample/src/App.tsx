import { FormControl, TextField } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";

// import test from 'Test.js'

const App: React.FC = () => {
  //firebaseのデータをstateで保持し状態管理を行う
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [inputs, setInput] = useState("");

  // Reactが立ち上がった時にfirebaseにアクセスしてdatabaseからtaskの内容を取得する
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    db.collection("tasks").add({ title: inputs });
    setInput("");
  };

  return (
    <>
      <div className="App">
        <h1>todo app by react/firebase</h1>
        <FormControl>
          <TextField
            label="New Task"
            value={inputs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
        </FormControl>
        <button disabled={!inputs} onClick={newTask}>
          <AddToPhotosIcon />
        </button>
        {tasks.map((task, index) => {
          return (
            <>
              <div key={index}>
                <h3>{task.title}</h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
