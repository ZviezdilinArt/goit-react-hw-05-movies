import { List, StyledLink } from 'components/Home/Home.styled';
import { Loader } from 'components/Loader/Loader';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from 'components/Movie/Movie.styled';
import { fetchAnyMovie } from 'components/services/API';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const Movie = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  console.log(name);
  useEffect(() => {
    if (!name) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchAnyMovie(name);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [name]);
  const handlerOnSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (!form.elements.name.value.trim()) {
      return toast.warn('Please, fill the field.');
    }
    const nextParams = name !== '' ? { name: form.elements.name.value } : {};
    setSearchParams(nextParams);
    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handlerOnSubmit}>
        <SearchFormInput
          name="name"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <ToastContainer />
        <SearchFormButton>
          <ImSearch width={30} height={30} />
        </SearchFormButton>
      </SearchForm>
      {loading && <Loader />}
      <List>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <StyledLink to={`${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </li>
        ))}
      </List>
    </>
  );
};

export default Movie;