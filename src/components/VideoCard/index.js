import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  VideoItem,
  VideoDetails,
  ImageEl,
  ParaDiv,
  Para,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewsCount,
    publishedAt,
  } = details

  const formattedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideoItem>
      <Link to={`/videos/${id}`}>
        <ImageEl src={thumbnailUrl} alt="video thumbnail" width="100%" />
        <VideoDetails>
          <ImageEl
            src={profileImageUrl}
            alt="channel logo"
            width="25%"
            height="25%"
          />
          <ParaDiv>
            <Para color="#1e293b" font="14px">
              {title}
            </Para>
            <Para color="#424242" font="14px">
              {name}
            </Para>
            <Para color="#424242" font="14px">
              {viewsCount} views . {formattedDate}
            </Para>
          </ParaDiv>
        </VideoDetails>
      </Link>
    </VideoItem>
  )
}

export default VideoCard
