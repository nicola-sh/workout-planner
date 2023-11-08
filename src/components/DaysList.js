const DaysList = ({ days }) => {
  return (
    <div className="day-list">
      {days.map((day) => (
        <div className="day-preview" key={day.id}>
          <h3>{day.TimeToStart}</h3>
          <h4>{day.DayName}</h4>
        </div>
      ))}
    </div>
  );
};

export default DaysList;
