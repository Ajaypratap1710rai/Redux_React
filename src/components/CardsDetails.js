import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { DLT, ADD, REMOVE } from '../redux/actions/action';

const CardsDetails = () => {

    const [data, setData] = useState([]);

    const { id } = useParams();
    //console.log(id);
    const getdata = useSelector((state) => state.cartreducer.carts);
    //console.log(getdata);
    const history= useNavigate();
    const dispatch = useDispatch();

    const comapare = () => {
        let comaapredata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comaapredata);
    }

    const send=(e)=>{
        //console.log(e)
        dispatch(ADD(e));
      }

    const dlt = (id) => {
        dispatch(DLT(id))
        history("/");
    }

    const remove = (item)=>{
        dispatch(REMOVE(item))
    }

    useEffect(() => {
        comapare();
    }, [id])

    return (
        <>
            <div className="conatainer mt-2">
                <h2 className='text-center'>Item Details Page:-
                </h2>

                <section className='conatainer mt-3'>
                    <div className="itemsdetails">
                        {
                            data.map((ele) => {
                                return (
                                    <>
                                        <div className="items_img">
                                            <img src={ele.imgdata} alt="" />
                                        </div>
                                        <div className="details">
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p><strong>Restaurant</strong>: {ele.rname}</p>
                                                        <p><strong>Price</strong>: ₹ {ele.price}</p>
                                                        <p><strong>Dishes</strong>: {ele.address}</p>
                                                        <p><strong>Total</strong>: ₹ {ele.price * ele.qnty}</p>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100, cursor:"pointer", background:"#ddd", color:"#111"}}>
                                                           <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=> dlt(ele.id) :remove(ele)}>-</span> 
                                                           <span style={{fontSize:24}}>{ele.qnty}</span> 
                                                           <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span> 
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating :</strong><span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★ </span></p>
                                                        <p><strong>Order Review :</strong><span>{ele.somedata} </span></p>
                                                        <p><strong>Remove :</strong><span> <i className='fas fa-trash'onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i> </span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }

                        


                    </div>
                </section>
            </div>
        </>
    )
}

export default CardsDetails
