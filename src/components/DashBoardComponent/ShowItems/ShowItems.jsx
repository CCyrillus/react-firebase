import React from 'react'

const ShowItems = ({ title, items }) => {
    return (
        <div className="w-100">
            <h4 className="text-center border-bottom py-2">{title}</h4>
            <div className="row gap-2 py-4 flex-wrap">
                {items.map((item, index) => {
                    return (
                        <p
                            className='col-md-2 p-2 text-center border'
                            key={index * Math.random()}
                        >
                            {item}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowItems