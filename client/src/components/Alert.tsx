import React from 'react';
import StyledAlert, { SuccessAlert, ErrorAlert } from './styles/Alert.styled';
import { Flex, SVG } from './styles/Components.styled';
import { connect } from 'react-redux';
import storeTypes from '../types/storeTypes';

interface Props {
  alert: storeTypes['alert'];
}

const Alert: React.FC<Props> = ({ alert }) => {
  return (
    <>
      <StyledAlert>
        {alert.map((index) => (
          <>
            {index.alertType === 'success' && (
              <>
                <SuccessAlert key={index.id}>
                  <Flex>
                    <SVG
                      fillColor='white'
                      strokeColor='white'
                      background='#2bae66ff'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03'></path>
                    </SVG>
                    <p>{index.msg}</p>
                  </Flex>
                </SuccessAlert>{' '}
              </>
            )}

            {index.alertType === 'error' && (
              <>
                <ErrorAlert key={index.id}>
                  <Flex>
                    <SVG
                      fillColor='white'
                      strokeColor='white'
                      background='red'
                      viewBox='0 0 20 20'
                    >
                      <path d='M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z'></path>
                    </SVG>
                    <p>{index.msg}</p>
                  </Flex>
                </ErrorAlert>
              </>
            )}
          </>
        ))}
      </StyledAlert>
    </>
  );
};

const mapStateToProps = (state: storeTypes) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
