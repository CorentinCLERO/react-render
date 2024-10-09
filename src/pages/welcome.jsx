import PropTypes from 'prop-types';
import Hello from '../components/hello';

Welcome.propTypes = {
  name: { type: PropTypes.string.isRequired }
};

function Welcome({ name }) {
  return (
    <div>
      <Hello name={name} />
    </div>
  );
}

export default Welcome;
