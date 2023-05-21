import React, { useEffect } from 'react'
import '../../styles/adminProducts.css'
import AdminPanel from './AdminPanel';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProducts, getSingleProduct } from '../../redux/allActions/productAction';
import { useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/loaderSlice';
import Loader from '../../components/Loader';
import { selectShowLoader } from '../../redux/features/loaderSelector';

const AdminProducts = () => {
    const showLoader = useSelector(selectShowLoader);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allProductsObj = useSelector((state) => state.allProductsReducer);
    const allProductsArr = allProductsObj?.products;

    useEffect(() => {
        dispatch(showLoading());
        dispatch(getAllProducts());
        setTimeout(() => {
            dispatch(hideLoading());
        }, 2000)
    }, [])

    return (
        <>
        {showLoader ? <Loader /> : <div className='CreateProductAdmin'>
            <div className="adminPanelContainer">
                <AdminPanel />
            </div>
            <div className="CreateProductAdminContainer">
                <div className="cpHeadingContainer">
                    <h2 className='createProductHeading'>{allProductsObj?.products.length > 0 ? "All Product" : "No Products Available"}</h2>
                    <div className="cpBlank">

                    </div>
                    <h6 style={{ color: "#0B5ED7", marginBottom: "16px" }}>{allProductsObj?.products.length == 0 || allProductsObj?.products.length == 1 ? `${allProductsObj?.products.length} product available` : `${allProductsObj?.products.length} products available`}</h6>
                </div>

                <div className="productsContainer">
                    {allProductsArr && allProductsArr?.map((product) => {
                        return <div className="singleProductContainer" key={product._id}>
                            <div className="productImageContainer">
                                <img src={product.photo} alt="product-photo" />
                            </div>
                            <div className="productContentContainer">
                                <h6 style={{ marginBottom: "6px" }}  >Product Name : {product.name}</h6>
                                <div style={{ marginBottom: "6px" }}  >Description : {product.description}</div>
                                <div style={{ marginBottom: "6px" }}  >Quantity : {product.quantity}</div>
                                <div className="priceContainer">
                                    <h6>Rs. {product.sellingPrice}</h6>
                                    <h6><strike>Rs. {product.originalPrice}</strike></h6>
                                </div>
                                <div className="buttonsContainer">
                                    <button className='btn btn-secondary' onClick={() => { navigate('/admin/update-product'); dispatch(getSingleProduct(product._id)) }}>Edit Product</button>
                                    <button className='btn btn-danger' onClick={() => { dispatch(deleteProduct(product._id)) }}>Delete Product</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>}
        </>
    )
}

export default AdminProducts
