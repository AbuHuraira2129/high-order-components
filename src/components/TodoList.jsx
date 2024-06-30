import React, { useState, useEffect } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [term, setTerm] = useState();
  // useEffect(() => {
  //   const fetchtodos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const json = await res.json();
  //     setTodos(json);
  //     console.log(json);
  //   };
  //   fetchtodos();
  // }, []);

  let rendertodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  // let filteredtodos = todos
  //   .slice(0, 10)
  //   .filter(({ title }) => {
  //     return title.indexOf(term) >= 0;
  //   })

  //   .map((todo) => {
  //     return (
  //       <div key={todo.userId}>
  //         <p>
  //           <strong>{todo.title}</strong>
  //         </p>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <div>{rendertodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
