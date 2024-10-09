import PropTypes from 'prop-types';

function Hello({ name }) {
  return <h1>Hello World {name}</h1>;
}

Hello.propTypes = {
  name: {
    type: PropTypes.string.isRequired
  }
};

export default Hello;
