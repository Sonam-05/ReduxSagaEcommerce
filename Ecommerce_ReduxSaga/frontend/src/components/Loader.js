import React from 'react'
import { useSelector } from 'react-redux'
import { selectShowLoader } from '../redux/features/loaderSelector'

const Loader = () => {
    const showLoader = useSelector(selectShowLoader)
  return (
    <div>
      {showLoader ? "Loading..." : ""}
    </div>
  )
}

export default Loader
