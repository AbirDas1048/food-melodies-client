import React from 'react';

const Review = ({review}) => {

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className='d-flex'>
                        <img alt="" src={review.userPhotoURL} width="30" height="30" className="rounded me-2" />
                        <span>{review.userName}</span>
                    </div>
                    <div className='d-flex'>
                        <span>{review.ratings}</span>
                    </div>
                    
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Ratings: {review.ratings}</h5> */}
                    <p className="card-text">{review.reviewDes}</p>
                </div>
            </div>
            <br/>
        </>
    );
};

export default Review;