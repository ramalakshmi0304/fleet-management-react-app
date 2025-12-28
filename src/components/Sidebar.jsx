import React from 'react'

const Sidebar = () => {

    const [vehicletext, setVehicletex] = useState();
    const [nameText, setNametext] = useState();
    const [cards, setCards] = useState();

    card = [{
        VehicleRegNo,
        Category,
        DriverName,
        AvailabilityStatus,
        Staticvehicleimage
    }]

    const updateDriver = () => {

    }

    const changeAvailability = () => {

    }

    const deleteVehicle = () => {

    }


}

return (
    <div>
        <input value="Vehile Registration Number" type="text" placeholder="Enter number" onChange={(e)}=>e.target.value/>
        <input value="Category" type="text" placeholder='Auto/Car/Truck/Bus' onChange={(e)}=>e.target.value/>
        <input value="Driver Name" type="text" placeholder='Enter Driver Name' onChange={(e)}=>e.target.value/>
        <input value="Availability Status" type="text" onChange={(e)}=>e.target.value/>
        <button onClick={addfleet}> Add Fleet</button>
        {setCard.map = ((card) => (
            <CardList key='VehicleRegNo' value={card} />
        ))}
    </div>
)
}

export default Sidebar