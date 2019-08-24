import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ModalSummary from '../../containers/MainContainer/ModalSummary/ModalSummary';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

const MainContainer = (props) => {
  const [show, setShow] = useState(false);

  const handleModalBtn = () => {
    setShow(true);
  }

  const handleModalClose = () => {
    setShow(false);
  }

  return (
    <Fragment >
      <h1>Main Container</h1>
      <div>
        <CounterOutput value={ props.counter } />
        <CounterControl label='Increment' clicked={ props.onIncrementCounter } />
        <CounterControl label='Add 5' clicked={ props.onAddCounter } />
      </div>
      <hr />
      <Button btnType='Success' clicked={ () => props.onStoreCounter(props.counter) }>Store Counter</Button>
      <ul>
        {
          props.results.map((counter) =>
            <li key={ counter.id } onClick={ () => props.onDeleteCounter(counter.id) }>{ counter.value }</li>
          )
        }
      </ul>

      <Button btnType='Success' clicked={ handleModalBtn }>Open Modal</Button>
      <Modal show={ show } modalClosed={ handleModalClose }>
        <ModalSummary />
      </Modal>
    </Fragment >
  )
};

const mapStateToProps = state => ({
  counter: state.counter.counter,
  results: state.counter.storeCounter
})

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  onAddCounter: () => dispatch({ type: 'ADD', payload: 5 }),
  onStoreCounter: (counter) => dispatch(actionCreators.storeCounter(counter)),
  onDeleteCounter: (id) => dispatch({ type: 'DELETE_COUNTER', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
