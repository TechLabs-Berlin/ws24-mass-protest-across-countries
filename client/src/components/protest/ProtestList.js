function ProtestList({ data }) {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString();
    };

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.imageUrl} alt="random protest image" /><br/>
                    Date: {formatDate(item.event_date)}<br/>
                    District: {item.district}<br/>
                    Theme: {item.categories}<br/>
                    Description: {item.description}<br/><hr/>
                </div>
            ))}
        </div>
    );
}

export default ProtestList;