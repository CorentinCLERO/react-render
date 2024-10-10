import PropTypes from 'prop-types';
import Hello from '../components/hello';

Welcome.propTypes = {
  name: { type: PropTypes.string.isRequired }
};

function Welcome({ name }) {
  return (
    <div className='d-flex justify-content-center'>
      <Hello name={name} />
    </div>
  );
}

export default Welcome;
