import './app.css'

function App() {
  const name = '삼두';
  return (
      <div>
          <h1>등하는날</h1>
          <h1>가슴하는날</h1>
          <p className="content">{name}하는날</p>
      </div>
  );
}

export default App;