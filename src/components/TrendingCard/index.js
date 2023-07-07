import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {TrendingItem, ImageEl, TrendingContent, Para} from './styledComponents'

const TrendingCard = props => {
  const {details} = props
  const {id, title, thumbnailUrl, name, viewCount, publishedAt} = details

  const formattedDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`}>
      <TrendingItem>
        <ImageEl src={thumbnailUrl} alt="video thumbnail" />
        <TrendingContent>
          <Para color="#475569" size="16px">
            {title}
          </Para>
          <Para color="  #64748b" size="12px">
            {name}
          </Para>
          <Para color="  #64748b" size="12px">
            {viewCount} views . {formattedDate}
          </Para>
        </TrendingContent>
      </TrendingItem>
    </Link>
  )
}

export default TrendingCard
