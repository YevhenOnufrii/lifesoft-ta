import { Components, Theme } from '@mui/material'

import { MuiBreadcrumbs } from './themed-components/breadcrumbs.modifier'
import { MuiContainer } from './themed-components/container.modifier'
import { MuiCssBaseline } from './themed-components/cssBaseline.modifier'
import { MuiTypography } from './themed-components/typography.modifier'

export const components: Components<Theme> = {
  MuiCssBaseline,
  MuiContainer,
  MuiBreadcrumbs,
  MuiTypography,
}
