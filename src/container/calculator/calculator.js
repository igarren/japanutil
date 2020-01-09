import React from 'react';
import Select from '../../components/ui/select/select';



const calculator = () => {
    const items = [
        {value : 'academic', text : 'Advanced academic research actitivies'},
        {value : 'technical', text : 'Advanced specialized / technical activities'},
        {value : 'business', text : 'Advanced business management activities'} 
    ];
    return (
        <div >
           <Select id='activity' items={items} />
        </div>
    )
}


export default calculator;
