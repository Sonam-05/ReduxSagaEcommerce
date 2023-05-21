import React, { useEffect, useState } from 'react'
import '../../styles/admin/createProductAdmin.css'
import AdminPanel from './AdminPanel'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../../redux/allActions/productAction'

const AdminUpdateProduct = () => {
    const singleProductObj = useSelector((state) => state.getSingleProductReducer);
    const dispatch = useDispatch();

    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageString, setImageString] = useState("");
    const [originalPrice, setOriginalPrice] = useState();
    const [sellingPrice, setSellingPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [photo, setPhoto] = useState(null);
    const [imageSelected, setImageSelected] = useState(false);

    useEffect(() => {
        if (singleProductObj) {
            setId(singleProductObj?.product._id);
            setName(singleProductObj?.product.name);
            setDescription(singleProductObj?.product.description);
            setImageString(singleProductObj?.product.photo);
            setOriginalPrice(singleProductObj?.product.originalPrice);
            setSellingPrice(singleProductObj?.product.sellingPrice);
            setQuantity(singleProductObj?.product.quantity);
        }
    }, [singleProductObj]);

    //submitPhotoToCloudinary
    const submitPhotoToCloudinary = () => {
        const data = new FormData();
        data.append("file", photo);
        data.append("upload_preset", "ecom05");
        data.append("cloud_name", "dib7eiw3v");
        fetch("https://api.cloudinary.com/v1_1/dib7eiw3v/image/upload", { method: "post", body: data }).then(res => res.json()).then((data) => { setImageString(data.secure_url); setImageSelected(false) }).catch((error) => console.log(error));
    }

    const updateProductFunc = () => {
        dispatch(updateProduct({ id, name, description, photo: imageString, originalPrice, sellingPrice, quantity }))
    }

    return (
        <div className='CreateProductAdmin'>
            <div className="adminPanelContainer">
                <AdminPanel />
            </div>
            <div className="CreateProductAdminContainer">
                <div className="cpHeadingContainer">
                    <h2 className='createProductHeading'>Update Product</h2>
                    <div className="cpBlank">
                    </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="cpCommonContainer">
                        <label htmlFor="upName" className="cpCommonLabel">Product Name :</label>
                        <input className='cpCommonInput' type="text" name="" id="upName" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label htmlFor="upDescription" className="cpCommonLabel">Description :</label>
                        <input className='cpCommonInput' type="text" name="" id="upDescription" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="cpCommonContainer">
                        {imageSelected == false ? <label className='photoClass'>UPDATE PHOTO
                            <input type="file" name="" id="" onChange={(e) => { setPhoto(e.target.files[0]); setImageSelected(true) }} accept='image/*' hidden />
                        </label> :
                            <label className='photoClass'>UPLOAD PHOTO
                                <input type="button" onClick={submitPhotoToCloudinary} hidden />
                            </label>
                        }
                    </div>
                    <br />

                    <div className="showPhotoContainer">
                        {photo ? <img src={URL.createObjectURL(photo)} alt='product-photo' /> : <img src={imageString} alt="product-photo" />}
                    </div>

                    <div className="cpCommonContainer">
                        <label htmlFor="upOriginalPrice" className="cpCommonLabel">Original Price :</label>
                        <input className='cpCommonInput' type="text" name="" id="upOriginalPrice" value={originalPrice} onChange={(e) => { setOriginalPrice(e.target.value) }} required />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label htmlFor="upSellingPrice" className="cpCommonLabel">Selling Price :</label>
                        <input className='cpCommonInput' type="text" name="" id="upSellingPrice" value={sellingPrice} onChange={(e) => { setSellingPrice(e.target.value) }} required />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label htmlFor="upQuantity" className="cpCommonLabel">Quantity :</label>
                        <input className='cpCommonInput' type="text" name="" id="upQuantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} required />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-primary' onClick={updateProductFunc}>Update Product</button>
                </form>
            </div>
        </div>
    )
}

export default AdminUpdateProduct
