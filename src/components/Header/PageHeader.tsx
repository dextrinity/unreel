import React from 'react';

import './page-header.scss';

import headerbg from '../../assets/headerbg.jpg';


const PageHeader = (props?:unknown) => {


    return (
        <div>
            
        <div className="page-header" style={{backgroundImage: `url(${headerbg})`}}>
        </div>
        <div>
          
          </div>
        </div>
    );
}


export default PageHeader;
