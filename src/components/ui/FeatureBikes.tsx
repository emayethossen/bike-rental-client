import { useGetBikesQuery } from '../../redux/api/bikeApi';

const FeatureBikes = () => {
    const { data, error, isLoading } = useGetBikesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading bikes</div>;
    const bikes = data?.data
    console.log(bikes)

    return (
        <div className="p-12">
            <h1 className="text-xl font-bold mb-4">Featured Bikes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bikes?.map((bike) => (
                    <div key={bike._id} className="p-4 border rounded">
                        <img src={bike.imageUrl} alt={bike.model} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-lg font-bold">{bike.brand} - {bike.model}</h2>
                        <p>Price: ${bike.price}</p>
                        <p>CC: {bike.cc}</p>
                        <p>Year: {bike.year}</p>
                        <p>Availability: {bike.availability ? 'Available' : 'Unavailable'}</p>
                        <button
                            onClick={() => window.location.href = `/bikes/${bike._id}`}
                            className="mt-2 p-2 bg-blue-500 text-white rounded"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureBikes;
