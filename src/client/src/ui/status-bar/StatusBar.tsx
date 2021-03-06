import React, { FC } from 'react'
import { Fill, Header, Root, OpenFinLogoContainer } from './styled'
import { OpenFinLogo } from './assets/OpenFinLogo'
import { usePlatform } from 'rt-components'

const LogoWithPlatform: FC = () => {
  const platform = usePlatform()
  return (
    <div>
      {platform.name === 'openfin' && (
        <OpenFinLogoContainer>
          <OpenFinLogo />
        </OpenFinLogoContainer>
      )}
    </div>
  )
}
interface Props {
  fillSize?: number
}
const StatusBar: FC<Props> = ({ fillSize = 1, children }) => (
  <Root>
    <Header>
      <Fill size={fillSize} />
      <LogoWithPlatform />
      {children}
    </Header>
  </Root>
)

export default StatusBar
