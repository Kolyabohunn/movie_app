import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';
//import Details from './Details';
function Movie(prop) {
  const { year, title, summary, medium_cover_image, genres } = prop;
  return (
    <Link
      to={{
        pathname: 'movie-detals',
        propsSearch: { year, title, summary, medium_cover_image, genres },
      }}
    >
      <div className="movie">
        <img src={medium_cover_image} alt="title" title={title} />
        <div className="movie__column">
          <h3 className="movie__title">{title}</h3>
          <ul className="genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary.slice(0, 150)}...</p>
        </div>
      </div>
    </Link>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Movie;
