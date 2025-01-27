import { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import Loading from './Loading';

const ImageSection = ({term}) => {
    const [images, setImages] = useState([])
    const [isLoading,setIsLoading]=useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `https://pixabay.com/api/?key=${
                        import.meta.env.VITE_PIXABAY_API_KEY
                    }&q=${term}&image_type=photo&pretty=true`
                )
                const data = await res.json()
                setImages(data.hits)
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [term])

    return (
        <>
        {images.length===0 && <p className='font-bold text-center mt-5 text-red-700'>No Images Found !</p>}
        {isLoading && <Loading/>}
        <div className="p-22 bg-blend-lighten bg-gray-800">
            <div className="grid grid-cols-3 gap-3 ">
                {images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
        </>
    )
}

export default ImageSection
