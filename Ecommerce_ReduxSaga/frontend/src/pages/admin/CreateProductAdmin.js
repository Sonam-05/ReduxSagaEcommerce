import React, { useEffect, useState } from 'react'
import '../../styles/admin/createProductAdmin.css'
import AdminPanel from './AdminPanel';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/allActions/productAction';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../redux/allActions/categoryAction';

const CreateProductAdmin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createProductObj  = useSelector((state) => state.createProductReducer);
    const allCategoriesObj = useSelector((state) => state.getAllCategoriesReducer);
    const categoriesArr = allCategoriesObj?.categories;
    console.log(categoriesArr);

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [photo, setPhoto] = useState(null);
    const [originalPrice, setOriginalPrice] = useState();
    const [sellingPrice, setSellingPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [photoSelected, setPhotoSelected] = useState(false);
    const [imageString, setImageString] = useState("")

    //submitPhotoToCloudinary
    const submitPhotoToCloudinary = () => {
        const data = new FormData();
        data.append("file", photo);
        data.append("upload_preset", "ecom05");
        data.append("cloud_name", "dib7eiw3v");
        fetch("https://api.cloudinary.com/v1_1/dib7eiw3v/image/upload", { method: "post", body: data }).then(res => res.json()).then((data) => {setImageString(data.secure_url); setPhotoSelected(false)}).catch((error) => console.log(error));
    }

    //createPhotoFunc
    const createPhotoFunc = () => {
        dispatch(addProduct({name, description, photo : imageString, originalPrice, sellingPrice, quantity}))
    }

    //createProductReducer useEffect
    useEffect(() => {
        if(createProductObj && createProductObj?.success == true){
            navigate('/admin/products');
        }
    }, [createProductObj]);

    //getAllCategories useEffect
    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    return (
        <div className='CreateProductAdmin'>
            <div className="adminPanelContainer">
                <AdminPanel />
            </div>
            <div className="CreateProductAdminContainer">
                <div className="cpHeadingContainer">
                    <h2 className="createProductHeading">Create Products</h2>
                    <div className="cpBlank">

                    </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="cpCommonContainer">
                        <label className='cpCommonLabel' htmlFor='pName'>Product Name : </label>
                        <input className='cpCommonInput' type="text" name="" id="pName" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label className='cpCommonLabel' htmlFor='pDescription'>Description :</label>
                        <input className='cpCommonInput' type="text" name="" id="pDescription" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
                    </div>
                    <br />

                    <div className="cpCommonContainer">
                        <label className='cpCommonLabel' htmlFor="category">Select a category : </label>
                        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((c) => {
                                console.log(c);
                                return <option key={c._id} value={c.name}>{c.name}</option>
                            })}
                        </select>
                    </div>
                    <br />

                    <div className="cpCommonContainer">
                        {photoSelected == false ?
                            <label className='photoClass'>CHOOSE PHOTO
                                <input className='' type="file" name="" onChange={(e) => { setPhoto(e.target.files[0]); setPhotoSelected(true) }} accept='image/*' hidden /></label> :
                            <label className='photoClass'>UPLOAD PHOTO
                                <input type="button" onClick={submitPhotoToCloudinary} hidden />
                            </label>}
                    </div>
                    <br />


                    <div className="showPhotoContainer">
                        {photo && <img src={URL.createObjectURL(photo)} alt='product-photo' />}
                    </div>
                    <div className="cpCommonContainer">
                        <label className='cpCommonLabel' htmlFor='pOriginalPrice'>Original Price :</label>
                        <input className='cpCommonInput' type="text" name="" id="pOriginalPrice" value={originalPrice} onChange={(e) => { setOriginalPrice(e.target.value) }} required />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label className='cpCommonLabel' htmlFor='pSellingPrice'>Selling Price :</label>
                        <input className='cpCommonInput' type="text" name="" id="pSellingPrice" value={sellingPrice} onChange={(e) => { setSellingPrice(e.target.value) }} required />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label className='cpCommonLabel' htmlFor='pQuantity'>Quantity</label>
                        <input className='cpCommonInput' type="number" name="" id="pQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-primary' onClick={createPhotoFunc}>Create Product</button>

                </form>
            </div>

        </div>
    )
}

export default CreateProductAdmin
