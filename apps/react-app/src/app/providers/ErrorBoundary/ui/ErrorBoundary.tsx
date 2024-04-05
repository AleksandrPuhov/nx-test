import React, { ErrorInfo, ReactNode, Suspense } from 'react';

import { Loader } from '@libs/@shared/ui/Loader/Loader';
import { PageErrorBlock } from '@libs/@shared/ui/PageErrorBlock/PageErrorBlock';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback={<Loader />}>
          <PageErrorBlock reload={() => window.location.reload()} />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
