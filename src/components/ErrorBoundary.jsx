import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {};

  static getDerivedStateFromError = (error) => ({ error });

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const {
      state: { error },
      props: { fallback: Fallback, children },
    } = this;

    return error
      ? typeof Fallback === 'function'
        ? <Fallback error={error} />
        : Fallback
      : children;
  }
}
