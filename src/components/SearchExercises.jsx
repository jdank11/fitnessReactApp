import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, getData } from '../utilities/getData'
import BodyPartScrollbar from './BodyPartScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const getExercisesData = async () => {
      const bodyPartsData = await getData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['All Body Parts:', ...bodyPartsData])
    }
    getExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await getData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions)
      console.log(exercisesData)   

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
               || exercise.target.toLowerCase().includes(search)
               || exercise.equipment.toLowerCase().includes(search)
               || exercise.bodyPart.toLowerCase().includes(search)
            
      )
      
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      setSearch('')
      setExercises(searchedExercises)
    }
  }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Explore Exercises <br /> 
      </Typography>
      <Box className='searchbox'>
        <TextField className='searchfield' placeholder="Search Exercises" type="text"
          sx={ {width: { lg: '1000px', xs: '350px' }}}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        <Button className='searchbutton' sx={{ bgcolor: 'red', color: 'white', textTransform: 'none', width: { lg: '150px', xs: '75px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '17px', xs: '14px' } }}
        onClick={handleSearch}
        >Search</Button>
      </Box>
      <Box className='exercisebox'>
        <BodyPartScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      </Box>



    </Stack>
  )
}
export default SearchExercises

