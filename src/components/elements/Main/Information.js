import Button from '../../UI/Button/Button';
import styles from './Main.module.scss';

function Information({ movie }) {
  const addToFavorites = (movieName) => {
    let favorites = localStorage.getItem('favMovies');
    if (favorites) {
      favorites = JSON.parse(favorites);
      localStorage.setItem('favMovies', [...favorites, movieName]);
      alert(`${movieName} добавлено в избранное!`);
    }
  };

  return (
    <div className={styles.info}>
      <img src={movie.logo} alt={movie.name} width="200px" />
      <div className={styles.additional}>
        <span>{movie.year}</span>
        <span>{movie.limitAge}</span>
        <span>{movie.rating}</span>
        <span>{movie.duration}</span>
      </div>

      <div className={styles.description}>{movie.description}</div>
      <div className={styles.buttons}>
        {/* <Button cb={() => setModulShow(true)}> */}
        <Button cb={() => console.log('video is open')}>
          <i className="bx bx-play"></i>
          <span>Play</span>
        </Button>
        <Button cb={addToFavorites}>
          <i className="bx bx-play"></i>
          <span>My list</span>
        </Button>
      </div>
    </div>
  );
}

export default Information;
