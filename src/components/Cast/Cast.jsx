import { fetchCast } from 'components/services/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { run as runHolder } from 'holderjs';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const response = await fetchCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  useEffect(() => {
    runHolder('holder');
  });

  // useEffect(() => {
  //   window.scrollBy({
  //     top: 200 * 2,
  //     behavior: 'smooth',
  //   });
  // }, [cast]);

  return (
    <>
      {loading && <Loader />}
      <List>
        {cast.map(({ character, name, profile_path, id }) => (
          <li key={id}>
            {profile_path ? (
              <img
                width="200"
                height="300"
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <img
                className="holder"
                width="200"
                height="300"
                data-src="holder.js/200x300?bg=#483d8b&text=There is no image yet..."
                alt="holder"
              />
            )}
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Cast;