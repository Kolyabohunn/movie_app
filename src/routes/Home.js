import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  async getMuvies() {
    const peliculas = await axios.get('https://yts.mx/api/v2/list_movies.json');
    const {
      data: {
        data: { movies },
      },
    } = peliculas;
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMuvies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })
        )}
      </section>
    );
  }
}
export default Home;
