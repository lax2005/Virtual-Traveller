import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Videos(){
  const [videos,setVideos] = useState([])
  useEffect(()=>{ axios.get('/api/videos').then(r=>setVideos(r.data)) },[])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Video Gallery</h2>
      <div className="grid gap-6">
        {videos.map(v=>(
          <div key={v.id} className="bg-white shadow rounded p-4">
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-slate-600 mb-2">{v.description}</p>
            <video src={v.url} controls className="w-full rounded"></video>
          </div>
        ))}
      </div>
    </div>
  )
}
