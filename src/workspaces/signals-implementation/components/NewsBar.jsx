/**
 * Component that displays news items
 * This component doesn't use any product signals, so it won't re-render
 * when the selected products change
 */
const NewsBar = () => {
    console.log("🗞️ NewsBar component rendered");

    const newsItems = [
        {
            id: 1,
            title: "New Product Launch",
            date: "August 7, 2025",
        },
        {
            id: 2,
            title: "Summer Sale Coming Soon",
            date: "August 10, 2025",
        },
        {
            id: 3,
            title: "Customer Satisfaction Survey",
            date: "August 15, 2025",
        },
        {
            id: 4,
            title: "Website Maintenance Notice",
            date: "August 20, 2025",
        },
    ];

    return (
        <div className="news-section">
            <h2>Latest News</h2>
            <div>
                {newsItems.map((item) => (
                    <div key={item.id} className="news-item">
                        <div className="news-title">{item.title}</div>
                        <div className="news-date">{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsBar;

