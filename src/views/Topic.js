import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Topic () {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  const { topicId } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`/data/${topicId}.json`).then(res => {
      console.log(res)
      setData(res.data)
    })
  }, [topicId])

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
    </div>
  )
}
