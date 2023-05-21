import React, { useEffect, useState } from 'react'
import '../../styles/admin/createProductAdmin.css'
import AdminPanel from './AdminPanel';
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory, getAllCategories, getSingleCategory } from '../../redux/allActions/categoryAction';
import AdminEditCategoryModal from './AdminEditCategoryModal';

const AdminCreateCategory = () => {
    const dispatch = useDispatch();
    const createCategoryObj = useSelector((state) => state.createCategoryReducer);
    const getAllCategoriesObj = useSelector((state) => state.getAllCategoriesReducer)
    const allCategoriesArr = getAllCategoriesObj?.categories;
    const updateCategoryObj = useSelector((state) => state.updateCategoryReducer);

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [showModal, setShowModal] = useState(false);

    //createCategoryFunc
    const createCategoryFunc = () => {
        dispatch(addCategory({ name, slug }));
    }

    useEffect(() => {
        dispatch(getAllCategories())
    },[])

    useEffect(() => {
        if (createCategoryObj!=null && createCategoryObj?.success) {
            setName("");
            setSlug("");
        } 
    }, [createCategoryObj])

    useEffect(() => {
        if(updateCategoryObj!=null){
            // console.log(updateCategoryObj)
            if(updateCategoryObj?.success){
                setShowModal(false);
                dispatch(getAllCategories())
            }
        }
    }, [updateCategoryObj])

    return (
        <div className='CreateProductAdmin'>
            <div className="adminPanelContainer">
                <AdminPanel />
            </div>
            <div className="CreateProductAdminContainer">
                <div className="cpHeadingContainer">
                    <h2 className='createProductHeading'>Manage Category</h2>
                    <div className="cpBlank">

                    </div>
                </div>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="cpCommonContainer">
                        <label htmlFor="name" className='cpCommonLabel'>CategoryName : </label>
                        <input className='cpCommonInput' type="text" name="" id="name" value={name} onChange={(e) => { setName(e.target.value) }} required/>
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label htmlFor="slug" className='cpCommonLabel'>Slug : </label>
                        <input className='cpCommonInput' type="text" name="" id="slug" value={slug} onChange={(e) => { setSlug(e.target.value) }} />
                    </div>
                    <br />
                    <button onClick={createCategoryFunc} className='btn btn-primary'>Submit</button>
                </form>

                <div className="table-responsive">
                    <table className="table">
                        <thead className='table-light'>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCategoriesArr && allCategoriesArr?.map((category) =>{ 
                                return <tr key={category._id}>
                                    {/* <th scope="row">1</th> */}
                                    <td>{category.name}</td>
                                    <td>{category.slug}</td>
                                    <td>
                                        <button className='btn btn-primary' style={{ "marginRight": "16px" }} onClick={() => {setShowModal(true); dispatch(getSingleCategory(category._id))}}>EDIT</button>
                                        <button onClick={() => {dispatch(deleteCategory(category._id))}} className='btn btn-danger'>DELETE</button>
                                    </td>
                                </tr>

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {showModal === true && <AdminEditCategoryModal />}
        </div>
    )
}

export default AdminCreateCategory
