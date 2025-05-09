import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layout/MainLayout";

const TourDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://azmitov.somee.com/api/api/tours/${id}`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log("Tour data:", data);
                setTour(data);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setError(err.message);
            });
    }, [id]);

    if (error) return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "#ef4444", fontSize: "18px" }}>
            Error: {error}
        </div>
    );

    if (!tour) return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "#6b7280", fontSize: "18px" }}>
            Loading...
        </div>
    );

    return (
        <Layout>
            {/* Встроенные стили */}
            <style>
                {`
                    @media (max-width: 768px) {
                        .hero-section {
                            height: 400px !important;
                        }
                        .hero-title {
                            font-size: 24px !important;
                        }
                        .hero-subtitle, .hero-reviews {
                            font-size: 14px !important;
                        }
                        .grid-container {
                            grid-template-columns: 1fr !important;
                        }
                        .about-title, .characteristics-title {
                            font-size: 24px !important;
                        }
                        .characteristics-item-title, .characteristics-item-text {
                            font-size: 16px !important;
                        }
                    }
                    @media (min-width: 769px) {
                        .grid-container {
                            grid-template-columns: 2fr 1fr !important;
                        }
                    }
                `}
            </style>

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px", fontFamily: "'Montserrat', sans-serif" }}>
                {/* Hero Section */}
                <div
                    className="hero-section"
                    style={{
                        width: "100%",
                        height: "500px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                        marginBottom: "24px",
                    }}
                >
                    <img
                        src={tour.image?.replace("..", "")}
                        alt={tour.title || "Tour"}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => console.error("Image load error:", e)}
                    />
                </div>

                {/* Tour Info Section */}
                <div style={{ marginBottom: "32px" }}>
                    <h1
                        className="hero-title"
                        style={{
                            color: "#333333",
                            fontSize: "36px",
                            fontWeight: "700",
                            marginBottom: "8px",
                        }}
                    >
                        {tour.title || "City Tour"}
                    </h1>
                    <p
                        className="hero-subtitle"
                        style={{
                            color: "#666666",
                            fontSize: "16px",
                            marginBottom: "8px",
                        }}
                    >
                        {tour.destination || "Unknown"} • {tour.duration || "N/A"}
                    </p>
                    <p
                        className="hero-reviews"
                        style={{
                            color: "#666666",
                            fontSize: "16px",
                            marginBottom: "16px",
                        }}
                    >
                        {tour.reviews || 0} reviews
                    </p>
                    <button
                        style={{
                            backgroundColor: "#0066cc",
                            color: "#ffffff",
                            fontSize: "16px",
                            fontWeight: "500",
                            padding: "8px 24px",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transition: "background-color 0.3s",
                        }}
                        onClick={() => navigate(`/apply-tour/${id}`)}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0066cc")}
                    >
                        Book now
                    </button>
                </div>

                {/* Main Content */}
                <div
                    className="grid-container"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: "32px",
                    }}
                >
                    {/* Left Column: About and Characteristics */}
                    <div>
                        {/* About Section */}
                        <div style={{ marginBottom: "48px" }}>
                            <h2
                                className="about-title"
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "600",
                                    color: "#333333",
                                    marginBottom: "16px",
                                }}
                            >
                                About the tour
                            </h2>
                            <p
                                style={{
                                    fontSize: "16px",
                                    color: "#666666",
                                    lineHeight: "1.6",
                                }}
                            >
                                {tour.description || "Discover the heart of the city with this immersive tour. Experience iconic landmarks, vibrant culture, and hidden gems, guided by local experts. Perfect for adventurers and history enthusiasts alike."}
                            </p>
                        </div>

                        {/* Characteristics Section */}
                        <div
                            style={{
                                borderTop: "1px solid #e5e7eb",
                                paddingTop: "24px",
                            }}
                        >
                            <h2
                                className="characteristics-title"
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "600",
                                    color: "#333333",
                                    marginBottom: "16px",
                                }}
                            >
                                Characteristics
                            </h2>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: "24px",
                                }}
                            >
                                <div>
                                    <h3
                                        className="characteristics-item-title"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            color: "#333333",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        Type
                                    </h3>
                                    <p
                                        className="characteristics-item-text"
                                        style={{
                                            fontSize: "16px",
                                            color: "#666666",
                                        }}
                                    >
                                        {tour.type || "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <h3
                                        className="characteristics-item-title"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            color: "#333333",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        Duration
                                    </h3>
                                    <p
                                        className="characteristics-item-text"
                                        style={{
                                            fontSize: "16px",
                                            color: "#666666",
                                        }}
                                    >
                                        {tour.duration || "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <h3
                                        className="characteristics-item-title"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            color: "#333333",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        Location
                                    </h3>
                                    <p
                                        className="characteristics-item-text"
                                        style={{
                                            fontSize: "16px",
                                            color: "#666666",
                                        }}
                                    >
                                        {tour.destination || "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <h3
                                        className="characteristics-item-title"
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            color: "#333333",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        Cost
                                    </h3>
                                    <p
                                        className="characteristics-item-text"
                                        style={{
                                            fontSize: "16px",
                                            color: "#666666",
                                        }}
                                    >
                                        {tour.cost || "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Card */}
                    <div>
                        <div
                            style={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                                padding: "24px",
                                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                                position: "sticky",
                                top: "24px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    color: "#0066cc",
                                    marginBottom: "16px",
                                }}
                            >
                                {tour.cost || "N/A"}
                            </div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#666666",
                                    marginBottom: "24px",
                                }}
                            >
                                per person
                            </p>
                            <button
                                style={{
                                    width: "100%",
                                    backgroundColor: "#0066cc",
                                    color: "#ffffff",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "none",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s",
                                }}
                                onClick={() => navigate(`/apply-tour/${id}`)}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#0066cc")}
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TourDetail;