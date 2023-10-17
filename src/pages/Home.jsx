import { List, StyledLink } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import { fetchPopularMovies } from 'components/services/API';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    async function getPopularMovies() {
      try {
        setLoading(true);
        const { data } = await fetchPopularMovies();
        setData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPopularMovies();
  }, []);
  return (
    <>
    {loading && <Loader/>}
    <List>
      {data.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`movie/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </List>
    </>
  );
};

export default Home;