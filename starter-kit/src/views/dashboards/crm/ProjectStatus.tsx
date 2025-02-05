'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type DataType = {
  title: string
  amount: string
  trendDiff: number
  trend?: 'positive' | 'negative'
}

// Define data for each product type
const productData: Record<
  string,
  { earnings: string; trendDiff: number; trend: 'positive' | 'negative'; series: number[]; stats: DataType[] }
> = {
  wheat: {
    earnings: '$4,200,000',
    trendDiff: 12.5,
    trend: 'positive',
    series: [30000, 32000, 31000, 34000, 36000, 37000, 38000, 39000],
    stats: [
      { title: 'Contracts', amount: '$1,200 Million', trendDiff: 50.34, trend: 'positive' },
      { title: 'Commercial', amount: '$2,500 Million', trendDiff: -100.24, trend: 'negative' }
    ]
  },
  tobacco: {
    earnings: '$4,3742',
    trendDiff: 10.2,
    trend: 'positive',
    series: [20000, 25000, 30000, 35000, 40000],
    stats: [
      { title: 'Contracts', amount: '$756.26 Million', trendDiff: -139.34, trend: 'negative' },
      { title: 'Commercial', amount: '$2,207.03 Million', trendDiff: 576.24 }
    ]
  },
  maize: {
    earnings: '$3,500,000',
    trendDiff: -5.0,
    trend: 'negative',
    series: [25000, 26000, 27000, 28000],
    stats: [
      { title: 'Contracts', amount: '$1,000 Million', trendDiff: -20.0, trend: 'negative' },
      { title: 'Commercial', amount: '$1,500 Million', trendDiff: 50.0 }
    ]
  },
  sugar: {
    earnings: '$5,000,000',
    trendDiff: 15.0,
    trend: 'positive',
    series: [40000, 42000, 43000],
    stats: [
      { title: 'Contracts', amount: '$800 Million', trendDiff: -10.0 },
      { title: 'Commercial', amount: '$1,200 Million', trendDiff: 100.0 }
    ]
  },
  livestock: {
    earnings: '$6,000,000',
    trendDiff: -8.0,
    trend: 'negative',
    series: [15000, 16000],
    stats: [
      { title: 'Contracts', amount: '$500 Million', trendDiff: -5.0 },
      { title: 'Commercial', amount: '$1,000 Million', trendDiff: -50.0 }
    ]
  }
}

type ProjectStatusProps = {
  name?: keyof typeof productData // Accepts keys of productData as name
}

const ProjectStatus = ({ name = 'tobacco' }: ProjectStatusProps) => {
  // Hooks
  const theme = useTheme()

  // Get data based on the product name
  const product = productData[name] || productData['tobacco'] // Fallback to tobacco if not found

  // Vars
  const warningColor = theme.palette.warning.main

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: 'straight'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: warningColor
            },
            {
              offset: 100,
              opacity: 0.1,
              color: 'var(--mui-palette-background-paper)'
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: warningColor
      }
    },
    grid: {
      show: false,
      padding: {
        top: -40,
        left: 0,
        right: 0,
        bottom: 32
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title={`${name.charAt(0).toUpperCase() + name.slice(1)} Earnings`}
        action={<OptionMenu options={['Share', 'Refresh', 'Update']} />}
      />
      <CardContent className='flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
          <CustomAvatar skin='light' variant='rounded' color='warning'>
            <i className='tabler-currency-dollar' />
          </CustomAvatar>
          <div className='flex justify-between items-center is-full'>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {product.earnings}
              </Typography>
              <Typography variant='body2'>Your Earnings</Typography>
            </div>
            <Typography className='font-medium' color={product.trend === 'negative' ? 'error.main' : 'success.main'}>
              {`${product.trend === 'negative' ? '-' : '+'}${product.trendDiff}`}
            </Typography>
          </div>
        </div>
        <AppReactApexCharts
          type='area'
          height={198}
          width='100%'
          series={[{ data: product.series }]}
          options={options}
        />
        <div className='flex flex-col gap-4'>
          {product.stats.map((item, index) => (
            <div key={index} className='flex items-center justify-between gap-4'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <Typography color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}>
                  {`${item.trend === 'negative' ? '-' : '+'}${item.trendDiff}`}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectStatus
