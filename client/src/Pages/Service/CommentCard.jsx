import React from 'react'
import moment from 'moment';

const CommentCard = ({review}) => {
  return (
    <article class="p-6 text-base rounded-lg bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-white font-semibold"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/>{review?.user?.fullName}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">{moment(review.epoch * 1000).format('DD MMM, YYYY')}</time></p>
            </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{review.comment}</p>
    </article>
  )
}

export default CommentCard