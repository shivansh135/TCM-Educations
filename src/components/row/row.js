import React from 'react';
export function Row({subject, Total_Questions, Time, Marks}) {
    return (
        <div>
        <div className='row'>
            <div className='settle'>
            <div className='row1_Column1'>
                    {subject}
            </div>
            <div className='CAT_PATTERN_row_pne'>
                <div className='row1_column2'>
                    {Total_Questions}
                </div>
                <div className='row1_column3'>
                    {Time}
                </div>
                <div className='row1_Column4'>
                    {Marks}
                </div>
            </div>   
            </div>
        </div>
        </div>

    )
}