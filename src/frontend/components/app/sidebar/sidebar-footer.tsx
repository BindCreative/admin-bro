import React from 'react'
import { Box } from '@admin-bro/design-system'

import allowOverride from '../../../hoc/allow-override'

const SidebarFooter: React.FC = () => (
  <Box mt="lg" />
)

export default allowOverride(SidebarFooter, 'SidebarFooter')
