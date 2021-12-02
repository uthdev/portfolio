import React from 'react';

import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import {Img, LinkTitle, LinkColumn, LinkItem, LinkList } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Certifications
    </SectionTitle>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Microsoft Certified: Azure Fundamentals</LinkTitle>
        <LinkItem href="https://www.credly.com/badges/350c44fc-1812-4a30-a5ac-6480fb3ec3d3/public_url" target="_blank">
          <Img src="/images/microsoft-certified-azure-fundamentals.png" />
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Microsoft Certified: Azure Developer Associate</LinkTitle>
        <LinkItem href="https://www.credly.com/badges/d599d635-73ef-4b3c-8bc7-23be9d421eef/public_url" target="_blank">
          <Img src="/images/microsoft-certified-azure-developer-associate.png" />
        </LinkItem>
      </LinkColumn>
    </LinkList>
  </Section>
);

export default Acomplishments;
