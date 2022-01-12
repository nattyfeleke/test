import React, { useState } from 'react';
import StyledEmployeeList from '../styles/EmployeeList.styled';
import { IconButton, SVG } from '../styles/Components.styled';
import { Employee } from '../../types/storeTypes';
import Moment from 'moment';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteEmployee } from '../../actions';
import { deleteEmployeeActionCreator } from '../../types/actionCreatorTypes';

interface Props {
  emp: Employee;
  deleteEmployee: deleteEmployeeActionCreator;
}

const EmployeeList: React.FC<Props> = ({ emp, deleteEmployee }) => {
  const onDelete = (employee_id: string | undefined) => {
    let shouldDelete = window.confirm(
      'Do you really want to delete this Employee?'
    );
    if (shouldDelete) deleteEmployee(employee_id);
  };
  return (
    <>
      <StyledEmployeeList>
        <div>
          <h4>{emp.name}</h4>
        </div>
        <div>{Moment(emp.birthDate).format('MMM DD YYYY ')} </div>
        <div>{emp.gender}</div>
        <div>{emp.salary}</div>
        <div>
          <IconButton>
            <Link to={`/update/${emp._id}`}>
              <SVG
                fillColor='#0071ff'
                strokeColor='white'
                background='white'
                viewBox='0 0 20 20'
              >
                <path
                  fill='none'
                  d='M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z'
                ></path>
              </SVG>
            </Link>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              onDelete(emp._id);
            }}
          >
            <SVG
              fillColor='red'
              strokeColor='white'
              background='white'
              viewBox='0 0 20 20'
            >
              <path
                fill='none'
                d='M16.588,3.411h-4.466c0.042-0.116,0.074-0.236,0.074-0.366c0-0.606-0.492-1.098-1.099-1.098H8.901c-0.607,0-1.098,0.492-1.098,1.098c0,0.13,0.033,0.25,0.074,0.366H3.41c-0.606,0-1.098,0.492-1.098,1.098c0,0.607,0.492,1.098,1.098,1.098h0.366V16.59c0,0.808,0.655,1.464,1.464,1.464h9.517c0.809,0,1.466-0.656,1.466-1.464V5.607h0.364c0.607,0,1.1-0.491,1.1-1.098C17.688,3.903,17.195,3.411,16.588,3.411z M8.901,2.679h2.196c0.202,0,0.366,0.164,0.366,0.366S11.3,3.411,11.098,3.411H8.901c-0.203,0-0.366-0.164-0.366-0.366S8.699,2.679,8.901,2.679z M15.491,16.59c0,0.405-0.329,0.731-0.733,0.731H5.241c-0.404,0-0.732-0.326-0.732-0.731V5.607h10.983V16.59z M16.588,4.875H3.41c-0.203,0-0.366-0.164-0.366-0.366S3.208,4.143,3.41,4.143h13.178c0.202,0,0.367,0.164,0.367,0.366S16.79,4.875,16.588,4.875zM6.705,14.027h6.589c0.202,0,0.366-0.164,0.366-0.366s-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.165-0.366,0.367S6.502,14.027,6.705,14.027z M6.705,11.83h6.589c0.202,0,0.366-0.164,0.366-0.365c0-0.203-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.164-0.366,0.367C6.339,11.666,6.502,11.83,6.705,11.83z M6.705,9.634h6.589c0.202,0,0.366-0.164,0.366-0.366c0-0.202-0.164-0.366-0.366-0.366H6.705c-0.203,0-0.366,0.164-0.366,0.366C6.339,9.47,6.502,9.634,6.705,9.634z'
              ></path>
            </SVG>
          </IconButton>
        </div>
      </StyledEmployeeList>
    </>
  );
};

export default connect(null, { deleteEmployee })(EmployeeList);
