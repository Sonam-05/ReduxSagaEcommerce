import React, { useState, useEffect } from 'react'
import "../../styles/adminEditCategoryModal.css"
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../../redux/allActions/categoryAction';

const AdminEditCategoryModalContainer = () => {
    const dispatch = useDispatch();
    const singleCategoryObj = useSelector((state) => state.getSingleCategoryReducer);

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [id, setId] = useState();

    useEffect(() => {
        // console.log(singleCategoryObj?.category);
        setName(singleCategoryObj?.category.name);
        setSlug(singleCategoryObj?.category.slug);
        setId(singleCategoryObj?.category._id)
    }, [singleCategoryObj])

    //editFunc
    const editFunc = (id) => {
        dispatch(updateCategory({id, name, slug}));
    }


    return (
        <div className='AdminEditCategoryModal'>
            <form className='adminEditCategoryFormContainer' onSubmit={(e) => { e.preventDefault() }}>
                <div className="AdminEditCategoryModalContainer">
                    <label htmlFor="name" className='AdminEditCategoryModalContainerCommonLabel'>CategoryName : </label>
                    <input className='AdminEditCategoryModalCommonInput' type="text" name="" id="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                </div>
                <br />
                <div className="AdminEditCategoryModalContainer">
                    <label htmlFor="slug" className='AdminEditCategoryModalContainerCommonLabel'>Slug : </label>
                    <input className='AdminEditCategoryModalCommonInput' type="text" name="" id="slug" value={slug} onChange={(e) => { setSlug(e.target.value) }} />
                </div>
                <br />
                <button className='btn btn-primary' onClick={() => {editFunc(id)}}>Update</button>
            </form>
        </div>
    )
}

export default AdminEditCategoryModalContainer
