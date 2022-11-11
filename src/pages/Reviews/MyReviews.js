import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Review.css';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user, logOut } = useContext(AuthContext);
    const email = user.email;

    const [myReview, setMyReview] = useState([]);

    let i = 1;

    useEffect(() => {
        const uri = `http://localhost:5000/myReviews?email=${email}`;
        fetch(uri, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('foodToken')}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }

                return res.json()
            })
            .then(data => setMyReview(data))
    }, [email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('foodToken')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.warning('Review deleted successfully');
                        const remaining = myReview.filter(review => review._id !== id);
                        setMyReview(remaining);
                    }
                })
        }
    }

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
                                myReview.map(review => <tr key={review._id}>
                                    <td>{i++}</td>
                                    <td>{review.serviceName}</td>
                                    <td>{review.ratings}</td>
                                    <td>{review.reviewDes}</td>
                                    <td className='text-center'>
                                        <NavLink to={`/myReviewUpdate/${review._id}`}><FaEdit className='text-info me-1'></FaEdit></NavLink>

                                        <FaTrash onClick={() => handleDelete(review._id)} className='text-danger review-delete'></FaTrash>


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