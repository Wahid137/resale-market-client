import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Larana Bike Store`;
    }, [title])
};
export default useTitle;