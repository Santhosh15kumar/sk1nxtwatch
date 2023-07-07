import {Link} from 'react-router-dom'
import {VideoItem, ImageEl, Para} from './styledComponents'

const Gaming = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <VideoItem>
      <Link to={`/videos/${id}`}>
        <ImageEl src={thumbnailUrl} alt=" video thumbnail" />
        <Para color="#0f0f0f">{title}</Para>
        <Para color="#475569" size="9px">
          {viewCount} Watching Worldwide
        </Para>
      </Link>
    </VideoItem>
  )
}

export default Gaming
