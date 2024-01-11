import { FC, PropsWithChildren } from 'react';

const AuthTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      {children}
    </section>
  );
};

export default AuthTemplate;
