import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Backend developer with 3+ years of full-stack  experience designing, enhancing and maintaining Node.js applications on different cloud platforms (AWS, Azure, GCP)
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/uthdev'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;