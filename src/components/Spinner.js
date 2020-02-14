import React from 'react';

const styles = {
  layer: {
    opacity: '0',
    backgroundColor: '#fff',
    transition: 'opacity .25s ease-in-out',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    top: '0',
    left: '0',
  },
  spinner: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    top: '0',
    left: '0',
    opacity: '0',
    fontSize: '30px',
  },
  loadingLayer: {
    zIndex: '299',
    opacity: '.5',
  },
  loadingSpinner: {
    justifyContent: 'center',
    display: 'flex',
    zIndex: '300',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: '1',
  },
};

const Spinner = ({ isLoading }) => {
  const layerStyle = isLoading ? {...styles.layer, ...styles.loadingLayer} : styles.layer;
  const spinnerStyle = isLoading ? {...styles.spinner, ...styles.loadingSpinner} : styles.spinner;

  return <div>
    {/* Loader Layer */}
    <div style={layerStyle}></div>

    {/* Loader Spinner */}
    <div style={spinnerStyle}>
      <i className="notched circle loading icon"></i>
      <p>Loading...</p>
    </div>
  </div>;
}

export default Spinner;
