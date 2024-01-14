import { FC, PropsWithChildren } from 'react';

const AuthTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-gray-50">
      {children}
    </section>
  );
};

export default AuthTemplate;
