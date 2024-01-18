import React, { useState } from 'react'
import CommentCard from './CommentCard';

const Comments = () => {
  const [reviews, setReviews] = useState([1,1,1]);
  return (
    <section class="w-100 py-8 lg:py-16 antialiased rounded-lg">
  <div class="w-100 max-w-2xl mx-auto px-4">
      <div class="w-full flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-white">Reviews (20)</h2>
    </div>
    <form class="mb-6 w-100">
        <div class="py-2 px-4 mb-4 rounded-lg rounded-t-lg border bg-gray-800 border-gray-700">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                class="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>
    {
        reviews.map((review, index)=>{
            return <CommentCard key={index}/>
        })
    }
  </div>
</section>
  )
}

export default Comments