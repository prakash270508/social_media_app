import React from 'react'

export default function Middle({posts}) {
  return (
    <div>
      <img src={posts.picturePath && posts.picturePath} alt="" />
    </div>
  )
}
