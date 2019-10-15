import App, { Container } from 'next/app';
import React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        <div>
          <Header />
          <main>
            <Component {...other} />
          </main>
          <Footer />
        </div>
      </Container>
    );
  }
}
