import React, { useEffect, useState } from 'react'
import '../../styles/admin/createProductAdmin.css'
import { useDispatch, useSelector } from 'react-redux';
import AdminPanel from './AdminPanel';
import { createTag, deleteTag, getAllTags, getSingleTag } from '../../redux/allActions/tagAction';
import AdminEditTag from './AdminEditTag';

const AdminCreateTag = () => {
    const dispatch = useDispatch();
    const getAllTagsObj = useSelector((state) => state.getAllTagsReducer);
    const allTagsObj = getAllTagsObj?.tags
    const updateTagObj = useSelector((state) => state.updateTagReducer);

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [showModal, setShowModal] = useState(false);

    //submitFunc (submitFunc to create-tag)
    const createTagFunc = () => {
        dispatch(createTag({ name, slug }))
    }

    //initially to get all tags
    useEffect(() => {
        dispatch(getAllTags());
    }, [])

    //get-all-tags
    useEffect(() => {
        if (getAllTagsObj) {
            // console.log(getAllTagsObj);
            setName("");
            setSlug("");
        }
    }, [getAllTagsObj])

    //update-tag
    useEffect(() => {
        if(updateTagObj){
            setShowModal(false);
        }
    },[updateTagObj])

    return (
        <div className='CreateProductAdmin'>
            <div className="adminPanelContainer">
                <AdminPanel />
            </div>
            <div className="CreateProductAdminContainer">
                <div className="cpHeadingContainer">
                    <h2 className='createProductHeading'>Manage Tags</h2>
                    <div className="cpBlank">

                    </div>
                </div>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="cpCommonContainer">
                        <label htmlFor="name" className='cpCommonLabel'>Tag Name : </label>
                        <input className='cpCommonInput' type="text" name="" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <br />
                    <div className="cpCommonContainer">
                        <label htmlFor="slug" className='cpCommonLabel'>Slug : </label>
                        <input className='cpCommonInput' type="text" name="" id="slug" value={slug} onChange={(e) => { setSlug(e.target.value) }} />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-primary' onClick={createTagFunc}>Submit</button>
                </form>

                <div className="table-responsive">
                    <table className="table">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">Tag Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTagsObj && allTagsObj.map((tag) => {
                                return <tr key={tag._id}>
                                    <td>{tag.name}</td>
                                    <td>{tag.slug}</td>
                                    <td>
                                        <button className='btn btn-primary' style={{ "marginRight": "16px" }} onClick={() => { setShowModal(true); dispatch(getSingleTag(tag.slug)) }}>EDIT</button>
                                        <button className='btn btn-danger' onClick={() => { dispatch(deleteTag(tag._id)) }}>DELETE</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {showModal == true && <AdminEditTag />}
        </div>
    )
}

export default AdminCreateTag
