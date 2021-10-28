import React,{useEffect, useState} from 'react'
import {
    useParams
  } from "react-router-dom";

  import { useDispatch } from 'react-redux'
import {postId} from '../action'
import {useSelector} from'react-redux'


const PostDetail=()=>{
  const data=useSelector(state=>state.post)
  // const todos=useSelector(state=>state.todos)
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(()=>{
      dispatch(postId(id))
    },[])// componentDidMOunt
  //  console.log(todos,"auth-------<>")
   if(!data.postdetail) return null
  
    return(
        <div>
            <h1>{data.postdetail.id} </h1>
            <h1>{data.postdetail.title} </h1>
            <h1>{data.postdetail.body} </h1>
        </div>
    )

}
export default PostDetail