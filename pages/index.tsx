import type { NextPage } from 'next';
import { CubeTransparentIcon } from '@heroicons/react/solid';

const Home: NextPage = () => {
    return (
        <div className="font-memo flex min-h-screen flex-col items-center justify-center text-gray-800">
            <p className="text-ml my-3">Concept A</p>
            <CubeTransparentIcon className="h-12 w-12 text-blue-500" />
        </div>
    );
};

export default Home;
