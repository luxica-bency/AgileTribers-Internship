import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [dark, setDark] = useState(false);

  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownItems = ["Item A", "Item B", "Item C"];

  const [searchTerm, setSearchTerm] = useState('');
  const items = ["Apple", "Banana", "Cherry", "Date"];

  const [activeTab, setActiveTab] = useState('Tab1');

const images =["https://tse1.mm.bing.net/th/id/OIP.rwpfFqzdLWkvDOHkqkVbJQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://e0.pxfuel.com/wallpapers/685/886/desktop-wallpaper-car-6000-x-4800-6000-x-4800.jpg",
      "https://tse2.mm.bing.net/th/id/OIP.V1RibwfDjaxVdDm4ouPxtAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"];
      const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Task Practice</h1>

      {/* Task 1: Counter */}
      <section>
        <h2>1. Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      {/* Task 2: Form */}
      <section>
        <h2>2. Form</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
        }}>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
          <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} /><br />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Task 3: Theme Toggle */}
      <section style={{
        backgroundColor: dark ? "#333" : "#eee",
        color: dark ? "#fff" : "#000",
        padding: "1rem",
        marginTop: "1rem"
      }}>
        <h2>3. Theme Toggle</h2>
        <button onClick={() => setDark(!dark)}>
          Switch to {dark ? "Light" : "Dark"} Mode
        </button>
      </section>

      {/* Task 4: Todo List */}
      <section>
        <h2>4. Todo List</h2>
        <input value={todoInput} onChange={e => setTodoInput(e.target.value)} />
        <button onClick={() => {
          setTodos([...todos, { text: todoInput, done: false }]);
          setTodoInput('');
        }}>Add</button>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              <input type="checkbox" checked={todo.done}
                     onChange={() => {
                       const newTodos = [...todos];
                       newTodos[i].done = !newTodos[i].done;
                       setTodos(newTodos);
                     }} />
              <span style={{ textDecoration: todo.done ? "line-through" : "" }}>{todo.text}</span>
              <button onClick={() => setTodos(todos.filter((_, index) => index !== i))}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Task 5: Modal */}
      {/* Task 5: Modal */}
<section>
  <h2>5. Modal</h2>
  <button onClick={() => setShowModal(true)}>Open Modal</button>

  {showModal && (
    <div style={{
      marginTop: "1rem",
      padding: "1rem",
      border: "2px solid #000",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <p>This is a modal shown inline below the button!</p>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  )}
</section>


      {/* Task 6: Dropdown */}
      <section>
        <h2>6. Dropdown</h2>
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>Toggle Dropdown</button>
        {dropdownOpen && (
          <ul>
            {dropdownItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </section>

      {/* Task 7: Search Filter */}
      <section>
        <h2>7. Search Filter</h2>
        <input placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <ul style={{ paddingLeft: '20px', listStylePosition: 'inside' }}>
  {items
    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((item, i) => <li key={i}>{item}</li>)}
</ul>

      </section>

      {/* Task 8: Tabs */}
      <section>
        <h2>8. Tabs</h2>
        <button onClick={() => setActiveTab('Tab1')}>Tab 1</button>
        <button onClick={() => setActiveTab('Tab2')}>Tab 2</button>
        <button onClick={() => setActiveTab('Tab3')}>Tab 3</button>
        <div>
          {activeTab === 'Tab1' && <p>This is Tab 1 content</p>}
          {activeTab === 'Tab2' && <p>This is Tab 2 content</p>}
          {activeTab === 'Tab3' && <p>This is Tab 3 content</p>}
        </div>
      </section>

      {/* Task 9: Carousel */}
      
      <section>
  <h2>9. Image Carousel</h2>
  <img
    src={images[imageIndex]}
    alt="Slide"
    width="300"
    height="200"
    style={{ objectFit: 'cover', borderRadius: '8px' }}
  /><br />
  <button onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)}>Prev</button>
  <button onClick={() => setImageIndex((imageIndex + 1) % images.length)}>Next</button>
</section>
    </div>
  );
}

export default App;
