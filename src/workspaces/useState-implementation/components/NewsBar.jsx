import React from "react";

/**
 * Component that displays news items
 * This component doesn't use the selected products state
 * but will re-render when the parent re-renders due to state changes
 */
const NewsBar = () => {
    // Sample news data
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

    // Log to demonstrate re-renders
    console.log("🗞️ NewsBar component rendered");

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

