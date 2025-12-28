import React from 'react'
import { useState } from 'react';

const Sidebar = () => {

    const [vehicletext, setVehicletex] = useState();
    const [nameText, setNametext] = useState();
    const [cards, setCards] = useState();

    const card = [{
        VehicleRegNo,
        Category,
        DriverName,
        AvailabilityStatus,
        Staticvehicleimage
    }]

    const updateDriver = () => {
        cards.map = ((updatedDriver) => setCards (card.DriverName,
            { ...card, ...updatedDriver }))
    }

    const updateAvailability = () => {
        cards.map = ((changeAvailability) => setCards(card.AvailabilityStatus),
            { ...card, ...updateAvailability }
        )
    }

    const deleteVehicle = () => {
        cards.filter= setCards(VehicleRegNo===card.VehicleRegNo? !VehicleRegNo: card )
    }
}

return (
    <div className="card-grid">
        <input value="Vehile Registration Number" type="text" placeholder="Enter number" onChange={(e)}=>e.target.value/>
        <input value="Category" type="text" placeholder='Auto/Car/Truck/Bus' onChange={(e)}=>e.target.value/>
        <input value="Driver Name" type="text" placeholder='Enter Driver Name' onChange={(e)}=>e.target.value/>
        <input value="Availability Status" type="text" onChange={(e)}=>e.target.value/>
        <button onClick={addfleet}> Add Fleet</button>
        {setCard.map = ((card) => (
            <CardList key='VehicleRegNo' value={cards} />
        ))}
    </div>
)
}

export default Sidebar