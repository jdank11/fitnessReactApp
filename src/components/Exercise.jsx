
import { Box, Stack} from '@mui/material'

import ExerciseCard from './ExerciseCard'

const Exercise = ({ exercises }) => {


  console.log(exercises)
  
  return (
    <Box id="exercises" >
      <h3 id="showresults">Showing Results</h3>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, _index) => (
          <ExerciseCard key={_index} exercise={exercise} />
        ))}
      </Stack>

      
    </Box>
  )
}

export default Exercise