import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Redirect} from 'react-router-dom'
import {BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {Component} from 'react'
import ReactPlayer from 'react-player'

import {
  VideoItemCard,
  Para,
  VideoDiv,
  ChannelDiv,
  ResponsiveDiv,
  IconsPara,
  ImageEl,
  DetailsDiv,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    isLoading: true,
    dataArray: [],
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscribers_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        dataArray: formattedData,
        isLoading: false,
      })
    }
  }

  isLiked = () => {
    const {liked, disliked} = this.state
    if (disliked) {
      this.setState({
        disliked: false,
      })
    }
    if (liked) {
      this.setState({
        liked: false,
      })
    } else {
      this.setState({
        liked: true,
      })
    }
  }

  isDisliked = () => {
    const {liked, disliked} = this.state
    if (liked) {
      this.setState({
        liked: false,
      })
    }
    if (disliked) {
      this.setState({
        disliked: false,
      })
    } else {
      this.setState({
        disliked: true,
      })
    }
  }

  isSaved = () => {
    const {saved} = this.state
    this.setState(prevState => ({
      saved: !prevState.saved,
    }))
  }

  render() {
    const {dataArray, isLoading, liked, disliked, saved} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = dataArray
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return (
      <VideoItemCard>
        <ReactPlayer url={videoUrl} controls />
        <Para color="#1e293b">{title}</Para>
        <VideoDiv>
          <Para color="#475569">
            {viewCount} views . {formattedDate}
          </Para>
          <ResponsiveDiv>
            <IconsPara onClick={this.isLiked}>
              <BiLike size={20} /> Like
            </IconsPara>
            <IconsPara onClick={this.isDisliked}>
              <BiLike size={20} /> Dislike
            </IconsPara>
            <IconsPara onClick={this.isSaved}>
              <MdPlaylistAdd size={20} /> {saved ? 'Saved' : 'Save'}
            </IconsPara>
          </ResponsiveDiv>
        </VideoDiv>
        <hr style={{color: '#475569', height: '1px'}} />
        <ChannelDiv>
          <ImageEl src={profileImageUrl} />
          <DetailsDiv>
            <Para color="#1e293b">{name}</Para>
            <Para color="#475569">{subscriberCount} subscribers</Para>
            <Para color="#475569">{description}</Para>
          </DetailsDiv>
        </ChannelDiv>
      </VideoItemCard>
    )
  }
}

export default VideoItemDetails
