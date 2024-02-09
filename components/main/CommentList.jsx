import React from 'react'

export default function CommentList({blog}) {
  const comments = blog ? blog.comments : "No comments yet"
  return (
    <div className='py-10'>
   
    <h2 className='text-center font-semibold text-4xl pb-10'><span className='text-purple-600'>C</span>omments</h2>

    <div className='lg:px-5 pb-6'>
      <form className='flex flex-row items-center gap-3 '>
        <input 
        type="text" 
        name='comment' 
        placeholder='Add a comment...' 
        className='flex-1 w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500'
        />
        <button type="submit" className='bg-purple-600 py-2 px-4 rounded-lg text-white hover:bg-purple-700'>Post</button>
      </form>
      
    </div>

    <div className='lg:px-5'>
    {
      comments.map((comment) => (
        <div className='py-2' key={comment.id}>
          <span className='text-purple-600 font-semibold '>{comment.user}</span>
          <p className='py-2 w-30'>{comment.content}</p>
        </div>
      ))
    }
    </div>
      
   
    
  </div>
  )
}
