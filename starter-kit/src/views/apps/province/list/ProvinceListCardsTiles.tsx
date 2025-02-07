// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UserDataType } from '@components/card-statistics/HorizontalWithSubtitle'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Vars
const data: UserDataType[] = [
  {
    title: 'Agritex Officers',
    stats: '359',
    avatarIcon: 'tabler-users',
    avatarColor: 'primary',
    trend: 'positive',
    trendNumber: '29%',
    subtitle: 'Total Registered Users'
  },
  {
    title: 'Farmers',
    stats: '21,459',
    avatarIcon: 'tabler-users',
    avatarColor: 'primary',
    trend: 'positive',
    trendNumber: '29%',
    subtitle: 'Total Registered Users'
  },
  {
    title: 'Livestock',
    stats: '4,567',
    avatarIcon: 'tabler-user-plus',
    avatarColor: 'error',
    trend: 'positive',
    trendNumber: '18%',
    subtitle: 'Available in the Province'
  },
  {
    title: 'Maize',
    stats: '19,860 Tonnes',
    avatarIcon: 'tabler-user-check',
    avatarColor: 'success',
    trend: 'negative',
    trendNumber: '14%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Tobbaco',
    stats: '1,600,932 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Beans',
    stats: '940 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Potatoes',
    stats: '1,940 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Wheat',
    stats: '8,425 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Cotton',
    stats: '98,125 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Horticulture',
    stats: '125,210 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '2%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Paprika',
    stats: '11,210 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '1%',
    subtitle: 'For the month of 2024'
  },
  {
    title: 'Peas',
    stats: '56,943 KGs',
    avatarIcon: 'tabler-user-search',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '9%',
    subtitle: 'For the month of 2024'
  }
]

const ProvinceListCardsTiles = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProvinceListCardsTiles
