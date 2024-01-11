import './global.css';
import { FC, PropsWithChildren, ReactElement } from 'react';

export const metadata = {
  title: 'PSU Service',
  description: 'PSU Service Powered by Beast Sentosa',
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
