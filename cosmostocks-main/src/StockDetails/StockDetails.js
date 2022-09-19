import React from 'react';
import PropTypes from 'prop-types';
import { useParams}from 'react-router-dom';
import StockOverview from './StockOverview';

const StockDetails=()=> { 
    const params=useParams();
    return (
        <div>
            Stock Details component
             <StockOverview symbol={params.symbol}></StockOverview> 
        </div>
        
    )
}

// StockDetails.propTypes = {};

export default StockDetails;