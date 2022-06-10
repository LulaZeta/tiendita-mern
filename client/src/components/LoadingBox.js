import Spinner from 'react-bootstrap/Spinner';
import '../CSS/Loading.css';

const LoadingBox = () => {
  return (
    <div className="spinner-box">
      <div className="spinner">
        <Spinner animation="border" role="status" className="spinner-spinner">
          <span className="visually-hidden">Loading ...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default LoadingBox;
