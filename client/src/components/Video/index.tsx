import React from 'react'
import './style.scss'

type VideoProps = {
  videoId: string
  title: string
  shareBy: string
  description: string
}

const Video = (props: VideoProps) => {
  const { videoId, title, shareBy, description } = props

  return (
    <div className='video'>
      <div className='video-iframe'>
        <iframe
          height={'100%'}
          width={'100%'}
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className='video-content'>
        <h3 className='title'>{title}</h3>
        {shareBy && (
          <div>
            Shared by: <b>{shareBy}</b>
          </div>
        )}
        {description && (
          <>
            <b>Description:</b>
            <div className='description'>{description}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default Video
