import React from 'react'

const Post = ({title, body}) => {
  return (
    <div className='text-center p-4 bg-white border border-gray-400/30 w-64'>
        <h4 className='font-bold'>{title}</h4>
        <p>{body}</p>
    </div>
  )
}

export default Post