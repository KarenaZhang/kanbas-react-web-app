import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [home, setHome] = useState(null);

  useEffect(() => {
    fetch("/kanbas/Courses/Home/screen.html")
      .then(result => {
        if (!result.ok) {
          throw new Error('Failed to fetch HTML file');
        }
        return result.text();
      })
      .then(page => setHome({ page: { __html: page } }))
      .catch(error => console.error(error));
  }, [])

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={home && home.page} />
    </div>
  );
}

export default App;
