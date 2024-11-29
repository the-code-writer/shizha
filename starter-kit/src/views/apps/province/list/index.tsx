// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
//import ProvinceListTable from './ProvinceListTable'
import ProvinceListCards from './ProvinceListCards'
import ProvinceListCardsTiles from './ProvinceListCardsTiles'

const ProvinceList = ({ userData }: { userData?: UsersType[] }) => {

  console.log(userData)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProvinceListCards />
      </Grid>
      <Grid item xs={12}>
        {/* 
        <ProvinceListTable tableData={userData} />
        */}
      </Grid>
    </Grid>
  )
}

const ProvinceListTiles = ({ userData }: { userData?: UsersType[] }) => {
  console.log(userData)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <h1 className='page-title-h1'>Provinces Overview</h1>
        <hr className='hr-divider' />
        <br />
        <br />
        <ProvinceListCardsTiles />
      </Grid>
    </Grid>
  )
}

export { ProvinceList, ProvinceListTiles}
