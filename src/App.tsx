import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sahood M P</h1>
        <p>Aspiring Full-Stack Developer</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate learner currently pursuing my education in computer science.
          I enjoy building web applications and solving real-world problems through code.
          My goal is to become a proficient full-stack developer.
        </p>
      </section>
      <section className="hobbies">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>
            <strong>Reading:</strong> I love reading books on technology and science fiction.
          </li>
          <li>
            <strong>Gaming:</strong> Playing video games helps me relax and think strategically.
          </li>
          <li>
            <strong>Hiking:</strong> Exploring nature and staying active outdoors.
          </li>
        </ul>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Problem Solving</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
