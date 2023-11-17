import today from '../../assets/Today.svg'
import { Container, Logo } from './styles'
function Header() {  

  return (
    <>
      <Container>
        <Logo src={today}/>
        <span style={{fontWeight: '200', opacity: '90%', padding:'8px 0'}}>Wake up , go a head , do the thing not tomorrow, do <strong>to</strong>day.</span>
      </Container>
    </>
  )
}

export default Header

