import React from 'react'
import './App.css';
import List from './components/List';

function App() {
  const  emitComment=(id)=>{
    setInterval(() => {
      window.dispatchEvent(
        new CustomEvent(`Lesson -${id}`,{
          detail: `Nội dung comment của Lesson ${id}`
        })
      )

    }, 2000);
  }
  emitComment(1)
  emitComment(2)
  emitComment(3)
  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;
