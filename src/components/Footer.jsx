import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-left relative top-80 '>
      <div className='text-center p-3 bg-deep-blue'>
        &copy; {new Date().getFullYear()} HAMMAD K{' '}
        <a className='text-blue' href='https://mdbootstrap.com/'>
          PORTFOLIO
        </a>
      </div>
    </MDBFooter>

  );
}