import {Link} from 'react-router-dom'

import {AiFillHome, AiFillTwitterCircle, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {TiSocialLinkedinCircular} from 'react-icons/ti'

import {
  CardContainer,
  TopCard,
  BottomCard,
  Para,
  Heading,
} from './styledComponents'

const Card = () => (
  <CardContainer>
    <TopCard>
      <Link to="/">
        <Para>
          <AiFillHome /> Home
        </Para>
      </Link>
      <Link to="/trending">
        <Para>
          <AiFillFire /> Trending
        </Para>
      </Link>
      <Link to="/gaming">
        <Para>
          <SiYoutubegaming /> Gaming
        </Para>
      </Link>
      <Para>
        <MdPlaylistAdd /> Saved videos
      </Para>
    </TopCard>
    <BottomCard>
      <Heading>CONTACT US</Heading>
      <Para>
        <FaFacebook size={20} /> <AiFillTwitterCircle size={20} />{' '}
        <TiSocialLinkedinCircular size={20} />
      </Para>
      <Para>Enjoy! Now to see your channels and recommendations!</Para>
    </BottomCard>
  </CardContainer>
)

export default Card
