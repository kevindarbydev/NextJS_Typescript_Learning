import { NextPage } from 'next';
import styles from '../styles/Home.module.css';

interface Props {
  title: string;
}

const Home: NextPage<Props> = ({ title }) => {
  return (
    <>
    <div className='flex flex-col text-center'>
        <nav className="flex flex-row items-center justify-between flex-1">
          <div className="flex items-center flex-initial my-4 ml-8">
            <img
              src="/first_logo.png"
              alt="Logo"
              className="h-12 w-12 mr-2"
            />
            <h1 className="underline text-3xl my-4 mb-8">{title}</h1>
          </div>
          <div className="flex-auto flex flex-row justify-center my-4">
            <div className='mr-8 border'>Products</div>
            <div>Login</div>
          </div>
        </nav>
      <div>
        <p className="text-blue-400 opacity-75 text-xl my-4">
          Welcome to my TypeScript-based Next.js app!
        </p>
        <hr />
        <div>
          <p className="text-red-700 my-4">
            This is an example of using Tailwind CSS in Next.js.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

Home.defaultProps = {
  title: 'My Next.js App',
};

export default Home;
