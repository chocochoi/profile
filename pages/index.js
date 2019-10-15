import React from 'react';
import Helmet from 'react-helmet';
import Hello from '@/Hello';
import '@styles/index.scss';

const Index = () => (
  <>
    <Helmet title="Main Page" />
    <Hello />
  </>
);

export default Index;
