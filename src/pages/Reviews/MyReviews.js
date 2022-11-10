import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const email = user.email;
    
    const [myReview, setMyReview] = useState([]);

    let i = 1;

    useEffect( () => {
        const uri = `http://localhost:5000/myReviews?email=${email}`;
        fetch(uri)
        .then(res => res.json())
        .then(data => setMyReview(data))
    }, [email]);
   
    return (
        <Container className='my-3'>
            {
                myReview.length > 0 ?
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Name</th>
                            <th>Ratings</th>
                            <th>Review</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReview.map( review => <tr key={review._id}>
                                <td>{i++}</td>
                                <td>{review.serviceName}</td>
                                <td>{review.ratings}</td>
                                <td>{review.reviewDes}</td>
                                <td className='text-center'>
                                    <NavLink to={`/myReviewUpadate/${review._id}`}><FaEdit className='text-info me-1'></FaEdit></NavLink>
                                    <NavLink to={`/myReviewUpadate/${review._id}`}><FaTrash className='text-danger'></FaTrash></NavLink>
                                    
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                :
                <h5 className='text-center'>No reviews were added</h5>
            }
        </Container>
    );
};

export default MyReviews;