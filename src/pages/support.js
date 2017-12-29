import React from 'react'
import Hero from '../layouts/components/Hero'

import { StyledH2, StyledP } from '../theme/globalStyle'
import CardContainer from '../layouts/components/CardContainer'
import { addCards } from '../layouts/utils/helpers'

import faker from 'faker'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
`
const SectionP = StyledP.extend`
  color: ${props => props.theme.text};
`

const SupportPage = () => (
  <div>
    <Hero type="support" />
    <CardContainer cols={3}>
      <SectionP>{faker.lorem.paragraph()}</SectionP>
      {addCards(2, 'project', undefined, 'none')}
    </CardContainer>

    <SectionTitle>featured projects</SectionTitle>

    <CardContainer cols={5}>{addCards(5, 'project')}</CardContainer>

    <SectionTitle>search &#38; filter here</SectionTitle>

    <CardContainer cols={5}>{addCards(10, 'project')}</CardContainer>
  </div>
)

export default SupportPage