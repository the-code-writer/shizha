// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  imgSrc: string
  progress: number
  subtitle: string
  progressColor: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    title: 'Manicaland',
    subtitle: '3,200 Tonnes',
    progress: 75,
    progressColor: 'success',
    imgSrc: '/images/logos/horticulture.png' // Update with appropriate image source
  },
  {
    title: 'Mashonaland East',
    subtitle: '1,800 Tonnes',
    progress: 85,
    progressColor: 'primary',
    imgSrc: '/images/logos/horticulture.png' // Update with appropriate image source
  },
  {
    title: 'Mashonaland West',
    subtitle: '4,500 Tonnes',
    progress: 60,
    progressColor: 'info',
    imgSrc: '/images/logos/horticulture.png' // Update with appropriate image source
  },
  {
    title: 'Mashonaland Central',
    subtitle: '2,900 Tonnes',
    progress: 50,
    progressColor: 'warning',
    imgSrc: '/images/logos/horticulture.png' // Update with appropriate image source
  },
  {
    title: 'Midlands',
    subtitle: '1,200 Tonnes',
    progress: 30,
    progressColor: 'error',
    imgSrc: '/images/logos/horticulture.png' // Update with appropriate image source
  },
  {
    title: 'Masvingo',
    subtitle: '750 Tonnes',
    progress: 40,
    progressColor: 'primary',
    imgSrc: '/images/logos/horticulture.png' // Update with appropriate image source
  }
]

const ActiveProjectsHorticulture = () => {
  return (
    <Card>
      <CardHeader
        title='Horticulture Harvest for 2024 by Province'
        subheader='Average 56% completed'
        action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      />
      <CardContent className='flex flex-col gap-4'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <div className='flex flex-col'>
                <Typography className='font-medium' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <div className='flex justify-between items-center is-32'>
                <LinearProgress
                  value={item.progress}
                  variant='determinate'
                  color={item.progressColor}
                  className='min-bs-2 is-20'
                />
                <Typography color='text.disabled'>{`${item.progress}%`}</Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default ActiveProjectsHorticulture
