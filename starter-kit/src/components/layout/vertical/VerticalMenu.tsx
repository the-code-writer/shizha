// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'
import CustomChip from '@core/components/mui/Chip'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/verticalMenuData'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale } = params

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu
          label={'Home'}
          icon={<i className='tabler-smart-home' />}
          suffix={<CustomChip label='5' size='small' color='error' round='true' />}
        >
          <MenuItem href={`/${locale}/dashboards/crm`}>Dashboard</MenuItem>
        </SubMenu>
        <MenuSection label={'Regions'}>
          <SubMenu label={'Provinces'} icon={<i className='tabler-user' />}>
            <MenuItem href={`/${locale}/apps/province/overview`}>Provinces Overview</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=harare`}>Harare</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=bulawayo`}>Bulawayo</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=mashonaland-central`}>Mashonaland Central</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=mashonaland-east`}>Mashonaland CentrEastal</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=mashonaland-west`}>Mashonaland West</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=manicaland`}>Manicaland</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=masvingo`}>Masvingo</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=midlands`}>Midlands</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=matebeleland-north`}>Matebeleland North</MenuItem>
            <MenuItem href={`/${locale}/apps/province/list?place=matebeleland-south`}>Matebeleland South</MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={'Users'}>
          <SubMenu label={'Agritext'} icon={<i className='tabler-user' />}>
            <MenuItem href={`/${locale}/apps/user-agritex/list`}>Agritext Officers</MenuItem>
            <MenuItem href={`/${locale}/apps/user-agritex/view`}>Add New Agritext Officer</MenuItem>
          </SubMenu>
          <SubMenu label={'Farmers'} icon={<i className='tabler-user' />}>
            <MenuItem href={`/${locale}/apps/user-farmer/list`}>Registered Farmers</MenuItem>
            <MenuItem href={`/${locale}/apps/user-farmer-new/view`}>Add New Farmer</MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={'Tools'}>
          <SubMenu label={'Weather'} icon={<i className='tabler-user' />}>
            <MenuItem href={`/${locale}/apps/tools/weather-forecast`}>Weather Forecast</MenuItem>
            <MenuItem href={`/${locale}/apps/tools/weather-report`}>Weather Report</MenuItem>
            <MenuItem href={`/${locale}/apps/tools/plating-dates`}>Planting Dates</MenuItem>
            <MenuItem href={`/${locale}/apps/tools/disease-tracking`}>Disease Tracking</MenuItem>
          </SubMenu>
          <SubMenu label={'Calculators'} icon={<i className='tabler-user' />}>
            <MenuItem href={`/${locale}/apps/utools/yeild`}>Yeild Tools</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
