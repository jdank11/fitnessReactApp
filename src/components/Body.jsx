import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'


export default function Body({ sidebar, children}) {

    return (
        <Container>
            <Stack direction='horizontal'>
                {sidebar && <Sidebar/>}
                <Container className='center-content'>
                    { children }
                </Container>
               
          
            </Stack>
        </Container>
  )
}
