import React from 'react'
import Axios from 'axios'

import { useQuery } from '@tanstack/react-query'

export default function Catfact() {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => {
      return res.data
    })
  })
  if (isError) {
    return <p>Data Has Not Been Fetched Might be Internet Problem Or Server</p>
  }
  if (isLoading) {
    return <p>Loading The Data..</p>
  }
  return (
    <div className='catFact'>
      <h2>{data?.fact}</h2>
      <button onClick={refetch}>Update Data</button>
    </div>
  )
}
