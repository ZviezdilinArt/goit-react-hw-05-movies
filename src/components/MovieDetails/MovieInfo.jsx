import { BiArrowBack } from 'react-icons/bi';
import {
  AdditionalWrapper,
  BackLink,
} from 'components/MovieDetails/MovieDetails.styled';
import { StyledLink } from 'components/Home/Home.styled';
import { Wrapper } from 'components/MovieDetailsCard/MovieDetailsCard.styled';
import { useLocation } from 'react-router-dom';

export const MovieInfo = ({ details, backLink }) => {
  const { title, vote_average, overview, poster_path, release_date } = details;
  const location = useLocation()
  console.log(location);
  // const backLink = location?.state?.from ?? '/'; 
  return (
    <>
      <BackLink to={backLink.current}>
        <BiArrowBack />
        Go back
      </BackLink>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="title"
        />
        <div>
          <h1>
            {title}({release_date?.slice(0, 4)})
          </h1>
          <p>User Score: {(vote_average * 10).toFixed()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{details.genres?.map(item => item.name).join(' ')}</p>
        </div>
      </Wrapper>
      <AdditionalWrapper>
        <p>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: location }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={{ from: location }}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </AdditionalWrapper>
    </>
  );
};