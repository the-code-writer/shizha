'use client'

// React Imports
import { useState } from 'react'

// Next Imports
//import { useRouter } from 'next/navigation'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Config Imports
// import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Styled Custom Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const Login = ({ mode }: { mode: SystemMode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')
  
  const [user, setUser] = useState<null|any>(null)

  // Mapping of user types to specific first and last names
  const userTypeNames:any = {
    root: { firstName: 'System', lastName: 'Administrator' },
    admin: { firstName: 'Admin', lastName: 'User' },
    gov: { firstName: 'Government', lastName: 'Official' },
    ministry: { firstName: 'Ministry', lastName: 'Official' },
    permsec: { firstName: 'Permanent', lastName: 'Secretary' },
    agritex: { firstName: 'Agritex', lastName: 'Officer' },
    farmer: { firstName: 'John', lastName: 'Doe' },
    buyer: { firstName: 'Jane', lastName: 'Smith' },
    seller: { firstName: 'Alice', lastName: 'Johnson' }
  }

  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-login-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-login-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-login-light-border.png'

  // Hooks
  //const router = useRouter()
  const { settings } = useSettings()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleSubmit = (event: any) => {

    let userType = ''
    let email = ''

    switch (username.toLowerCase()) {
      case 'root':
      case 'root@zhizha.gov.zw':
        userType = 'root'
        email = 'root@zhizha.gov.zw'
        break
      case 'admin':
      case 'admin@zhizha.gov.zw':
        userType = 'admin'
        email = 'admin@zhizha.gov.zw'
        break
      case 'gov':
      case 'gov@zhizha.gov.zw':
        userType = 'gov'
        email = 'gov@zhizha.gov.zw'
        break
      case 'ministry':
      case 'ministry@zhizha.gov.zw':
        userType = 'ministry'
        email = 'ministry@zhizha.gov.zw'
        break
      case 'permsec':
      case 'permsec@zhizha.gov.zw':
        userType = 'permsec'
        email = 'permsec@zhizha.gov.zw'
        break
      case 'agritex':
      case 'agritex@zhizha.gov.zw':
        userType = 'agritex'
        email = 'agritex@zhizha.gov.zw'
        break
      case 'farmer':
      case 'farmer@zhizha.gov.zw':
        userType = 'farmer'
        email = 'farmer@zhizha.gov.zw'
        break
      case 'buyer':
      case 'buyer@zhizha.gov.zw':
        userType = 'buyer'
        email = 'buyer@zhizha.gov.zw'
        break
      case 'seller':
      case 'seller@zhizha.gov.zw':
        userType = 'seller'
        email = 'seller@zhizha.gov.zw'
        break
      default:
        alert('Invalid username or email')
        return
    }

    // Get the specific first and last names for the user type
    const { firstName, lastName } = userTypeNames[userType]

    // Create user object
    const userObject = {
      userType: userType,
      email: email,
      password: btoa(password), // Hash the password using md5
      firstName: firstName,
      lastName: lastName
    }

    // Save user object (you can replace this with your actual state management or API call)
    setUser(userObject)

    localStorage.setItem(
      "user_data",
      JSON.stringify(userObject)
    );


    event.preventDefault()
    console.log("/")
    window.location.href = '/en/dashboards/crm';

    if (user) {
      
    }

  }

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <LoginIllustration src={characterIllustration} alt='character-illustration' />
        {!hidden && (
          <MaskImg
            alt='mask'
            src={authBackground}
            className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
          />
        )}
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <Link className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </Link>
        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-11 sm:mbs-14 md:mbs-0'>
          <br />
          <div style={{ textAlign: 'center', width: '100%', display: 'block' }}>
            <img style={{ maxWidth: 300, width: '100%', margin: 'auto' }} src='/images/coatofarms.png' />
            <br />
            MINISTRY OF LANDS, AGRICULTURE, FISHERIES, WATER AND RURAL DEVELOPMENT
            <br />
          </div>
          <div className='flex flex-col gap-1'>
            {/* <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography> */}
            <Typography>Please login your account using your credentials</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => handleSubmit(e)} className='flex flex-col gap-5'>
            <CustomTextField
              autoFocus
              fullWidth
              label='Email or Username'
              placeholder='Enter your email address'
              onChange={e => {
                setUsername(e.target.value)
              }}
            />
            <CustomTextField
              fullWidth
              label='Password'
              placeholder='············'
              id='outlined-adornment-password'
              type={isPasswordShown ? 'text' : 'password'}
              onChange={e => {
                setPassword(e.target.value)
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
              <FormControlLabel control={<Checkbox />} label='Remember me' />
              <Typography className='text-end' color='primary' component={Link}>
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Login
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New on our platform?</Typography>
              <Typography component={Link} color='primary'>
                Create an account
              </Typography>
            </div>
            <Divider className='gap-2 text-textPrimary'>or</Divider>
            <div className='flex justify-center items-center gap-1.5'>
              <IconButton className='text-facebook' size='small'>
                <i className='tabler-brand-facebook-filled' />
              </IconButton>
              <IconButton className='text-twitter' size='small'>
                <i className='tabler-brand-twitter-filled' />
              </IconButton>
              <IconButton className='text-textPrimary' size='small'>
                <i className='tabler-brand-github-filled' />
              </IconButton>
              <IconButton className='text-error' size='small'>
                <i className='tabler-brand-google-filled' />
              </IconButton>
            </div>
          </form>
          <br />
          <div className='flex justify-center items-top gap-1.5'>
            <div style={{ textAlign: 'center', width: '100%', display: 'block' }}>
              Supported By
              <br />
              <img
                style={{ width: 100, margin: 'auto' }}
                src='https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-1/327178789_751714596389565_8926554342126211208_n.png?stp=dst-png_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=f907e8&_nc_ohc=fyBUrH-kyQEQ7kNvgFc0IG5&_nc_zt=24&_nc_ht=scontent-cpt1-1.xx&_nc_gid=AqFuLyI1nZ2qhI7TNDznGpk&oh=00_AYAyqbaTKy_PSpiMLXbLqFgP-lr8S32pC2rPJMigxbop_w&oe=67A8464F'
              />
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'block' }}>
              In partneership With
              <br />
              <img style={{ width: 160, margin: 'auto' }} src='/images/pages/logo1.jpg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
