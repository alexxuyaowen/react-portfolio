const Projects = () => (
  <div className='projects'>
    <iframe
      src='https://alexxuyaowen.github.io/gofive/'
      title='GoFive'
      width='700'
      height='800'
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
