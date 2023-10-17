import { BallTriangle } from 'react-loader-spinner';
import { Backdrop, WrapperForLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
        <WrapperForLoader>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#6c4da9"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      </WrapperForLoader>
    </Backdrop>
  );
};