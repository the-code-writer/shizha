// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import ProvinceListTable from './ProvinceListTable'
import ProvinceListCards from './ProvinceListCards'

const ProvinceList = ({ userData }: { userData?: UsersType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProvinceListCards />
      </Grid>
      <Grid item xs={12}>
        <ProvinceListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default ProvinceList
