// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import DistributedBarChartOrder from '@views/dashboards/crm/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/dashboards/crm/LineAreaYearlySalesChart'
import CardStatVertical from '@/components/card-statistics/Vertical'
import BarChartRevenueGrowth from '@views/dashboards/crm/BarChartRevenueGrowth'
import EarningReportsWithTabs from '@views/dashboards/crm/EarningReportsWithTabs'
import RadarSalesChart from '@views/dashboards/crm/RadarSalesChart'
import ProjectStatus from '@views/dashboards/crm/ProjectStatus'
import ActiveProjectsTobacco from '@views/dashboards/crm/ActiveProjectsTobacco'
import ActiveProjectsMaize from '@views/dashboards/crm/ActiveProjectsMaize'
import ActiveProjectsWheat from '@views/dashboards/crm/ActiveProjectsWheat'
import ActiveProjectsSugar from '@views/dashboards/crm/ActiveProjectsSugar'
import ActiveProjectsHorticulture from '@views/dashboards/crm/ActiveProjectsHorticulture'
import ActiveProjectsLivestock from '@views/dashboards/crm/ActiveProjectsLivestock'
import ActiveProjectsCotton from '@views/dashboards/crm/ActiveProjectsCotton'

// Server Action Imports
//import { getServerMode } from '@core/utils/serverHelpers'

const DashboardCRM = () => {
  // Vars

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Livestock Growth'
          subtitle='Last Week'
          stats='1.28k'
          avatarColor='error'
          avatarIcon='tabler-credit-card'
          avatarSkin='light'
          avatarSize={44}
          avatarIconSize={28}
          chipText='-12.2%'
          chipColor='error'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Marketplace Sales'
          subtitle='Last Week'
          stats='24.67k'
          avatarColor='success'
          avatarIcon='tabler-currency-dollar'
          avatarSkin='light'
          avatarSize={44}
          avatarIconSize={28}
          chipText='+24.67%'
          chipColor='success'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <BarChartRevenueGrowth />
      </Grid>
      <Grid item xs={12} lg={8}>
        <EarningReportsWithTabs />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <RadarSalesChart />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <h1>Tobacco</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='tobacco' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsTobacco />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <h1>Maize</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='maize' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsMaize />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <h1>Cotton</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='cotton' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsCotton />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <h1>Wheat</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='wheat' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsWheat />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <h1>Sugar</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='sugar' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsSugar />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <h1>Horticulture</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='horticulture' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsHorticulture />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <h1>Livestock</h1>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ProjectStatus name='livestock' />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ActiveProjectsLivestock />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
