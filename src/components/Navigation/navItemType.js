import PropTypes from 'prop-types';

const navItemType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  subItems: PropTypes.array,
});

export default navItemType;
