import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Food Melodies`;
    }, [title])
};

export default useTitle;