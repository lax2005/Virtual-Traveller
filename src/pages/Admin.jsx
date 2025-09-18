import React, { useState } from 'react'
import axios from 'axios'

export default function Admin(){
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [file,setFile] = useState(null)

  async function uploadVideo(e){
    e.preventDefault()
    const fd = new FormData()
    fd.append('video', file)
    fd.append('title', title)
    fd.append('description', desc)
    await axios.post('/api/videos', fd)
    alert('Video uploaded!')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin — Upload Video</h2>
      <form onSubmit={uploadVideo} className="space-y-3">
        <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded"/>
        <textarea placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} className="w-full border p-2 rounded"/>
        <input type="file" accept="video/*" onChange={e=>setFile(e.target.files[0])}/>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Upload</button>
      </form>
    </div>
  )
}
