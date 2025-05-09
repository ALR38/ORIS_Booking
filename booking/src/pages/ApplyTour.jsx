import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/MainLayout";

const ApplyTour = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        country: "",
        email: "",
        phone: "",
        comment: "",
        consent: false,
    });
    const [formErrors, setFormErrors] = useState({});

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName || formData.fullName.split(" ").filter(Boolean).length < 2) {
            errors.fullName = "Введите имя и фамилию";
        }
        if (!formData.country) {
            errors.country = "Выберите страну";
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Введите корректный email";
        }
        if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10) {
            errors.phone = "Введите корректный номер телефона (не менее 10 цифр)";
        }

        if (!formData.consent) {
            errors.consent = "Необходимо согласие на обработку данных";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const dataToSend = {
            tourId: id,
            fullName: formData.fullName,
            country: formData.country,
            email: formData.email,
            phone: formData.phone,
            comment: formData.comment,
        };

        fetch("http://azmitov.somee.com/api/emailSender", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then(async res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const text = await res.text(); // получаем ответ как текст
                const data = text ? JSON.parse(text) : null;

                console.log("Application submitted:", data);
                alert("Заявка на бронирование тура отправлена!");
            })
            .catch(err => {
                console.error("Submit error:", err);
                alert("Ошибка при отправке заявки");
            });
    };


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
            <style>{`
    @media (max-width: 768px) {
        .form-container {
            padding: 24px 16px !important;
        }
        .tour-info {
            flex-direction: column !important;
            align-items: flex-start !important;
        }
        .tour-info div {
            margin-bottom: 8px !important;
        }
        .form-title {
            font-size: 24px !important;
        }
        .form-subtitle {
            font-size: 16px !important;
        }
    }
`}</style>


            <div
                className="form-container"
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "48px 24px",
                    fontFamily: "'Montserrat', sans-serif",
                    backgroundColor: "#f9fafb",
                    borderRadius: "12px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                    marginTop: "24px",
                    marginBottom: "24px",
                }}
            >
                <h1
                    className="form-title"
                    style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#333333",
                        marginBottom: "16px",
                    }}
                >
                    Заявка на бронирование тура
                </h1>
                <p
                    className="form-subtitle"
                    style={{
                        fontSize: "18px",
                        color: "#666666",
                        marginBottom: "24px",
                    }}
                >
                    Заполните форму ниже, и наш менеджер свяжется с вами в течение 15 минут
                </p>

                {/* Информация о туре */}
                <div
                    className="tour-info"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                        marginBottom: "32px",
                    }}
                >
                    <div>
                        <h2 style={{fontSize: "20px", fontWeight: "600", color: "#333333", marginBottom: "8px"}}>
                            {tour.title || "City Tour"}
                        </h2>
                        <p style={{fontSize: "16px", color: "#666666"}}>
                            {tour.destination || "Unknown"} • {tour.duration || "N/A"}
                        </p>
                    </div>
                    <div style={{fontSize: "20px", fontWeight: "700", color: "#0066cc"}}>
                        {tour.cost || "N/A"}
                    </div>
                </div>

                {/* Форма */}
                <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
                    <div>
                        <label style={{
                            display: "block",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#333333",
                            marginBottom: "8px"
                        }}>
                            ФИО
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Иванов Иван Иванович"
                            style={{
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
                            }}
                        />
                        {formErrors.fullName && (
                            <p style={{color: "#ef4444", fontSize: "14px", marginTop: "4px"}}>
                                {formErrors.fullName}
                            </p>
                        )}
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#333333",
                            marginBottom: "8px"
                        }}>
                            Страна
                        </label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <option value="">Выберите страну</option>
                            <option value="Russia">Россия</option>
                            <option value="Thailand">Таиланд</option>
                            <option value="USA">США</option>
                            <option value="Germany">Германия</option>
                        </select>
                        {formErrors.country && (
                            <p style={{color: "#ef4444", fontSize: "14px", marginTop: "4px"}}>
                                {formErrors.country}
                            </p>
                        )}
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#333333",
                            marginBottom: "8px"
                        }}>
                            Электронная почта
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@mail.com"
                            style={{
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
                            }}
                        />
                        {formErrors.email && (
                            <p style={{color: "#ef4444", fontSize: "14px", marginTop: "4px"}}>
                                {formErrors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#333333",
                            marginBottom: "8px"
                        }}>
                            Телефон
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+X (XXX) XXX-XX-XX"
                            style={{
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
                            }}
                        />
                        {formErrors.phone && (
                            <p style={{color: "#ef4444", fontSize: "14px", marginTop: "4px"}}>
                                {formErrors.phone}
                            </p>
                        )}
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#333333",
                            marginBottom: "8px"
                        }}>
                            Комментарий (необязательно)
                        </label>
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            maxLength="500"
                            style={{
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
                                minHeight: "120px",
                                resize: "vertical",
                            }}
                        />
                    </div>

                    <div>
                        <label style={{display: "flex", alignItems: "center", fontSize: "16px", color: "#333333"}}>
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                style={{marginRight: "8px", width: "16px", height: "16px"}}
                            />
                            Я согласен на обработку персональных данных
                        </label>
                        {formErrors.consent && (
                            <p style={{color: "#ef4444", fontSize: "14px", marginTop: "4px"}}>
                                {formErrors.consent}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: "#0066cc",
                            color: "#ffffff",
                            fontSize: "16px",
                            fontWeight: "500",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transition: "background-color 0.3s",
                            alignSelf: "center",
                            marginTop: "16px",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0066cc")}
                    >
                        Отправить заявку
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default ApplyTour;