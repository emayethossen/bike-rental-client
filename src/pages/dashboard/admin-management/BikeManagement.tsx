import { useDeleteBikeMutation, useGetBikesQuery, useUpdateBikeMutation } from "../../../redux/api/adminApi";


const BikeManagementPage = () => {
    const { data: bikes, isLoading } = useGetBikesQuery();
    const [updateBike] = useUpdateBikeMutation();
    const [deleteBike] = useDeleteBikeMutation();

    const handleUpdate = async (id: string, updatedData: Partial<Bike>) => {
        await updateBike({ id, ...updatedData });
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this bike?')) {
            await deleteBike(id);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Bike Management</h1>
            <ul>
                {bikes?.map((bike) => (
                    <li key={bike.id} className="border-b py-2 flex justify-between items-center">
                        <div>
                            <h2 className="font-bold">{bike.name}</h2>
                            <p>{bike.description}</p>
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={() => handleUpdate(bike.id, { name: 'Updated Name' })}>Update</button>
                            <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleDelete(bike.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BikeManagementPage;
