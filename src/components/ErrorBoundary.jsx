import { Component } from 'react';

// Klasa za globalno hendlovanje grešaka
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Provera da li postoji neuhvaćena greška na stranici.
  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  // Ukoliko postoji neka greška uhvaćena na stranici ispisuje se u konzoli.
  componentDidCatch(error, info) {
    console.error('Error boundary caught:', error, info);
  }

  // Ukoliko postoji neka neuhvaćena greška na stranici prikazuje se tekst.
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please reload the page.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;