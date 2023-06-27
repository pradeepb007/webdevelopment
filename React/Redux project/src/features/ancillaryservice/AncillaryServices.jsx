import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchFlightById,
  addAncillaryService,
  editAncillaryService,
  deleteAncillaryService,
} from "../flights/flightService";
import FlightDetails from "../flights/FlightDetails";

function AncillaryServices() {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  const selectedFlight = useSelector((state) => state.flights.selectedFlight);

  console.log("selectedFlight", selectedFlight);

  const [ancillaryServices, setAncillaryServices] = useState([]);
  const [newService, setNewService] = useState("");
  const [editService, setEditService] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchFlightById(flightId));
  }, [dispatch, flightId]);

  useEffect(() => {
    if (selectedFlight) {
      setAncillaryServices(selectedFlight.ancillaryServices);
    }
    console.log("Ancillaryservices", ancillaryServices);
  }, [selectedFlight]);

  const handleAddService = () => {
    if (newService.trim() !== "") {
      dispatch(addAncillaryService({ flightId, service: newService }));
      setNewService("");
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    let serviceval = selectedFlight.ancillaryServices[index];
    setEditService(serviceval);
    console.log(serviceval);
  };

  const handleEditService = () => {
    if (editService.trim() !== "") {
      dispatch(
        editAncillaryService({
          flightId,
          service: editService,
          index: editIndex,
        })
      );
      setEditService("");
      setEditIndex(null);
    }
  };

  const handleDeleteService = (index) => {
    dispatch(deleteAncillaryService({ flightId, service: "", index }));
  };

  return (
    <div>
      {selectedFlight ? (
        <>
          <FlightDetails flight={selectedFlight} />
          <h2>Ancillary Services</h2>

          <div>
            {ancillaryServices.map((service, index) => (
              <div key={index}>
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editService}
                      onChange={(e) => setEditService(e.target.value)}
                    />
                    <button onClick={handleEditService}>Save</button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span>{service}</span>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    {/* <button  onClick={() => setEditIndex(index)}>Edit</button> */}
                    <button onClick={() => handleDeleteService(index)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))}
            {editIndex === null && (
              <div>
                <input
                  type="text"
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                />
                <button onClick={handleAddService}>Add</button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div>Loading flight details...</div>
      )}
    </div>
  );
}

export default AncillaryServices;
