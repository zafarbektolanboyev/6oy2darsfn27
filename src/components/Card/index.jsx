import React from 'react'

function Card(props){
        const {data} = props;               
    return(
        <div className='cards'>
            <div className='Card'>
                <img src={data.image} alt="" />
                <div className='info'>
                    <h2>{data.firstName}</h2>
                    <h2>{data.lastName}</h2>
                    <h4>{data.email}</h4>
                    <h4>{data.cars[1]}</h4>
                </div>
        </div>
        </div>
    )
}
export default Card