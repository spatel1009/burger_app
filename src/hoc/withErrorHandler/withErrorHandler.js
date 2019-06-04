import React, {Fragment, Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount () {
      // Add request to clear errors anytime a request is made
      axios.interceptors.request.use(req => {
        this.setState( { error: null } );
        return req;
      })
      // Below the shortest possible way to return the response, which is necessary.
      axios.interceptors.response.use(resp => resp, error => {
        this.setState( { error: error } );
      });
    }

    errorConfirmedHandler = () => {
      this.setState( { error: null } );
    }

    render () {
      return (
        <Fragment>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
}

export default withErrorHandler;