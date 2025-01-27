const ImageCard = ({ image }) => {
    const imagetags = image.tags.split(',')
    // console.log(imagetags[0])

    return (
        <div className="w-full h-fit rounded-lg mb-5 shadow-gray-400 shadow-2xl ">
            <img
                src={image.webformatURL}
                alt="image"
                className="w-full rounded-lg"
            />
            <div className="flex flex-col gap-2 p-4">
                <p>
                    Photos By <strong>{image.user}</strong>
                </p>
                <p>
                    <strong>views :</strong> {image.views}
                </p>
                <p>
                    <strong>Downloads :</strong> {image.downloads}
                </p>
                <p>
                    <strong>Likes :</strong> {image.likes}
                </p>
                <p className="boder border-gray-400 rounded-xl">
                    <strong>Tags :</strong>
                    <span className="border border-gray-100 text-sm bg-gray-200 rounded-2xl m-2 p-2">#{imagetags[0]}</span>
                    <span className="border border-gray-100 text-sm bg-gray-200 rounded-2xl m-2 p-2">#{imagetags[1]}</span>
                    <span className="border border-gray-100 text-sm bg-gray-200 rounded-2xl m-2 p-2">#{imagetags[2]}</span>
                </p>
            </div>
        </div>
    )
}

export default ImageCard
