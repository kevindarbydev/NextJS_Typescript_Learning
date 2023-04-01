import { NextPage } from 'next';
import Header from '@/components/header/Header';
import Layout from '@/components/Layout';


interface Props {
  title: string;
}
const Home: NextPage<Props> = () => {
  return (
    <>
      <Layout>
        <div className='flex flex-col text-center'>
          <div style={{ backgroundColor: "rgba(51, 51, 51, 0.4)" }}>
          </div>
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
      </Layout>
    </>
  );
};


export default Home;

