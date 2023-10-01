import React from 'react'
import './Posts.css'
import SinglePost from '../Single Post/SinglePost'

export default function Posts() {
  let array=[1,2,3,4,5]
  return (
    <div className="posts">
      {
        array.map((arr) => <SinglePost/>)
        
      }
      
    </div>
  )
}
