import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useReturnBikeMutation } from '../../../redux/api/rentalApi';

const RentalReturn = () => {
    const selectedRentalId = useSelector((state: RootState) => state.rental.selectedRentalId);
    const [returnBike, { isLoading, isSuccess, isError }] = useReturnBikeMutation();

    useEffect(() => {
        if (selectedRentalId) {
            returnBike(selectedRentalId);
        }
    }, [selectedRentalId, returnBike]);

    if (isLoading) return <div>Processing return...</div>;
    if (isError) return <div>Error processing return</div>;
    if (isSuccess) return <div>Bike returned successfully</div>;

    return null;
};

export default RentalReturn;
