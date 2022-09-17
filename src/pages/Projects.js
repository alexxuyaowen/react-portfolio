const Projects = () => (
  <div className='projects'>
    <img
      src='https://raw.githubusercontent.com/alexxuyaowen/gofive/main/demo/demo.png'
      alt='GoFive'
      onClick={() =>
        window.open('https://github.com/alexxuyaowen/gofive', '_blank')
      }
    />

    <img
      src='https://raw.githubusercontent.com/alexxuyaowen/maze/master/Maze/Demo/main.PNG'
      alt='Maze'
      onClick={() =>
        window.open('https://github.com/alexxuyaowen/maze', '_blank')
      }
    />
  </div>
);

export default Projects;
