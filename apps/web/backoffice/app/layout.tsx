import './global.css';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { QueryProvider } from '@fmb/web-providers';

export const metadata = {
  title: 'PSU Service',
  description: 'PSU Service Powered by Beast Sentosa',
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
