import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchFlightById,
  updateFlightDetails,
  addAncillaryService,
  editAncillaryService,
} from "./flightService";
import FlightDetails from "./FlightDetails";

function AncillaryServices() {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  const selectedFlight = useSelector((state) => state.flights.selectedFlight);
  const [ancillaryServices, setAncillaryServices] = useState([]);
  const [newService, setNewService] = useState("");
  const [editService, setEditService] = useState("");
  const [editIndex, setEditIndex] = useState();

  useEffect(() => {
    dispatch(fetchFlightById(flightId));
  }, [dispatch, flightId]);

  useEffect(() => {
    if (selectedFlight) {
      setAncillaryServices(selectedFlight.ancillaryServices);
    }
  }, [selectedFlight]);

  const handleAddService = () => {
    if (newService.trim() !== "") {
      dispatch(addAncillaryService({ flightId, service: newService }));
      setNewService("");
    }
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
    dispatch(editAncillaryService({ flightId, service: "", index }));
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
                    <button onClick={() => setEditIndex(index)}>Edit</button>
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
          {/* Other sections for special meals and in-flight shopping items */}
        </>
      ) : (
        <div>Loading flight details...</div>
      )}
    </div>
  );
}

export default AncillaryServices;
