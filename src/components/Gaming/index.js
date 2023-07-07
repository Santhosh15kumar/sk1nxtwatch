import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import GamingCard from '../GamingCard'
import ErrorImage from '../ErrorImage'

import {GamingDiv, GamingImg, GamingHeader, Heading} from './styledComponents'

class Gaming extends Component {
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
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
          viewCount: eachVideo.view_count,
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
    this.setState({
      isLoading: false,
    })
  }

  render() {
    const {isLoading, dataArray, status} = this.state
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
              <GamingDiv>
                <GamingHeader>
                  <SiYoutubegaming />
                  <Heading>Gaming</Heading>
                </GamingHeader>
                <GamingImg>
                  {dataArray.map(eachVideo => (
                    <GamingCard details={eachVideo} key={eachVideo.id} />
                  ))}
                </GamingImg>
              </GamingDiv>
            ) : (
              <ErrorImage refresh={this.getVideos} />
            )}
          </>
        )}
      </>
    )
  }
}

export default Gaming
