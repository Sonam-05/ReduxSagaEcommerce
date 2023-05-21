import React, { useEffect, useState } from 'react'
import '../../styles/admin/adminEditTag.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateTag } from '../../redux/allActions/tagAction';

const AdminEditTag = () => {
    const getSingleTagObj = useSelector((state) => state.getSingleTagReducer);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [id, setId] = useState();

    useEffect(() => {
        if (getSingleTagObj) {
            // console.log(getSingleTagObj)
            setId(getSingleTagObj?.tag._id);
            setName(getSingleTagObj?.tag.name);
            setSlug(getSingleTagObj?.tag.slug);
        }
    }, [getSingleTagObj]);

    //updateTagFunc
    const updateTagFunc = (id) => {
        dispatch(updateTag({ id, name, slug }))
    }

    return (
        <div className='AdminEditTag'>
            <form className='tagFormContainer' onSubmit={(e) => { e.preventDefault() }}>
                <div className="commonLabelInputContainer">
                    <label className='commonTagLabel' htmlFor="tagName">Tag Name :</label>
                    <input className='commonTagInput' type="text" name="" id="tagName" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <br />
                <div className="commonLabelInputContainer">
                    <label className='commonTagLabel' htmlFor="tagSlug">Slug :</label>
                    <input className='commonTagInput' type="text" name="" id="tagSlug" value={slug} onChange={(e) => { setSlug(e.target.slug) }} />
                </div>
                <br />
                <button type="submit" className='btn btn-primary' onClick={() => { updateTagFunc(id) }}>Update</button>
            </form>
        </div>
    )
}

export default AdminEditTag
