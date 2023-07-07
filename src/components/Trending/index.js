import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import TrendingCard from '../TrendingCard'
import ErrorImage from '../ErrorImage'
import {
  TrendingDiv,
  TrendingHeader,
  Heading,
  TrendingList,
} from './styledComponents'

class Trending extends Component {
  state = {
    isLoading: true,
    dataArray: [],
    status: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const formattedData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
        }))
        await this.setState({
          dataArray: formattedData,
          status: true,
        })
      }
    } catch {
      await this.setState({
        status: false,
      })
    }
    this.setState({isLoading: false})
  }

  render() {
    const {dataArray, isLoading, status} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        ) : (
          <>
            {status ? (
              <TrendingDiv>
                <TrendingHeader>
                  <AiFillFire />
                  <Heading>Trending</Heading>
                </TrendingHeader>
                <TrendingList>
                  {dataArray.map(eachVideo => (
                    <TrendingCard details={eachVideo} key={eachVideo.id} />
                  ))}
                </TrendingList>
              </TrendingDiv>
            ) : (
              <ErrorImage refresh={this.getVideos} />
            )}
          </>
        )}
      </>
    )
  }
}

export default Trending
