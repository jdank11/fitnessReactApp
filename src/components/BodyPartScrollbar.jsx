import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'


const BodyPartScrollbar = ({ data, setBodyPart, bodyPart }) => (
  <ScrollMenu>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
       <BodyPart item={item} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
      </Box>
    ))}
  </ScrollMenu>

)

export default BodyPartScrollbar