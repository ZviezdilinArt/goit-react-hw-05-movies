import { Container } from 'components/Container/Container.styled';
import { fetchDetails } from 'components/services/API';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const response = await fetchDetails(movieId);
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <section style={{ padding: '30px 0px' }}>
      <Container>
        {loading && <Loader />}
        {details && <MovieInfo details={details} backLink={backLink} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </section>
  );
};

export default MovieDetails;