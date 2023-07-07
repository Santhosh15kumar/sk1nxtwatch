import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ErrorImage from '../ErrorImage'
import VideoCard from '../VideoCard'

import {
  HomeContainer,
  SearchInput,
  InputEl,
  ButtonEl,
  NoResultImageContainer,
  NoResImg,
  NoResHeading,
  Para,
  VideosList,
} from './styledComponents'

class Home extends Component {
  state = {
    searchInput: '',
    isLoading: true,
    dataArray: [],
    status: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async (searchVal = '') => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchVal}`
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
        const formattedData = data.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
          viewsCount: eachItem.view_count,
          publishedAt: eachItem.published_at,
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

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSearch = () => {
    const {searchInput} = this.state
    this.getVideos(searchInput)
  }

  onKey = event => {
    if (event.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  retry = () => {
    this.onSearch()
  }

  render() {
    const {searchInput, isLoading, dataArray, status} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <HomeContainer>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        ) : (
          <>
            {status ? (
              <>
                <SearchInput>
                  <InputEl
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    onKeyDown={this.onKey}
                  />
                  <ButtonEl type="button" onClick={this.onSearch}>
                    <AiOutlineSearch />
                  </ButtonEl>
                </SearchInput>
                <VideosList>
                  {dataArray.map(eachItem => (
                    <VideoCard details={eachItem} key={eachItem.id} />
                  ))}
                </VideosList>
              </>
            ) : (
              <ErrorImage refresh={this.retry} />
            )}
          </>
        )}
      </HomeContainer>
    )
  }
}

export default Home
