import locationIcon from './../img/location-icon.png'

function Entry(props) {

    const { imageUrl, location, googleMapsUrl, title, startDate, endDate, description } = props.journalEntryData;

    return (
        <div className="journal-entry">
            <img className="journal-entry-img" src={imageUrl} alt="" />
            <div className="journal-entry-text">
                <img src={locationIcon} alt="" /><h3 className="location">{location}</h3>
                <a className="link" href={googleMapsUrl} target="_blank">View on Google Maps</a>
                <span></span><h2 className="title">{title}</h2>
                <p className="date">{startDate} - {endDate}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Entry;