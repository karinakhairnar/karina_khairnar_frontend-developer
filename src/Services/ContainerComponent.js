import { connect } from 'react-redux';
import { fetchData } from './actions';
import PresentationComponent from './PresentationComponent';

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentationComponent);
