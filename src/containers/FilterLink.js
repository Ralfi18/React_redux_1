import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../Components/Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filtr === state.setVisibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;