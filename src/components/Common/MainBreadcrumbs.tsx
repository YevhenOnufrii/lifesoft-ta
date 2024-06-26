import { Breadcrumbs, Link, SvgIcon, Typography } from '@mui/material'
import { FC } from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

type MainBreadcrumbsProps = {
  currentTitle: string
}

const MainBreadcrumbs: FC<MainBreadcrumbsProps> = ({ currentTitle }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<Separator />}>
      <Link
        href={'/'}
        sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
        onClick={e => e.preventDefault()}
      >
        <HomeOutlinedIcon sx={{ fontSize: '15px' }} />
      </Link>
      <Typography>{currentTitle}</Typography>
    </Breadcrumbs>
  )
}

export default MainBreadcrumbs

// ==================== PARTS ====================

const Separator: FC = () => {
  return (
    <SvgIcon sx={{ width: 10, height: 10 }}>
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_1001)">
          <path
            d="M3.854 1.64689C3.78407 1.57679 3.6949 1.52902 3.59779 1.50966C3.50068 1.49029 3.40001 1.50019 3.30854 1.53811C3.21706 1.57603 3.13891 1.64025 3.08398 1.72264C3.02905 1.80503 2.99982 1.90187 3 2.00089V9.1729C3.00002 9.27183 3.02939 9.36854 3.0844 9.45077C3.1394 9.53301 3.21757 9.59708 3.309 9.63487C3.40043 9.67266 3.50102 9.68248 3.59804 9.66308C3.69505 9.64368 3.78413 9.59594 3.854 9.5259L7.439 5.9409C7.48556 5.89445 7.52251 5.83927 7.54771 5.77853C7.57292 5.71778 7.58589 5.65266 7.58589 5.58689C7.58589 5.52113 7.57292 5.45601 7.54771 5.39526C7.52251 5.33452 7.48556 5.27934 7.439 5.23289L3.854 1.64789V1.64689Z"
            stroke="#405EFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1001">
            <rect width="10" height="10" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
}
