import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
  <main>
    <Header />

    <MainContent
      title="First Content Section"
      content="This is the first content section."
    />

    <MainContent
      title="Second Content Section"
      content="This is the second content section."
    />
  </main>
  );
}