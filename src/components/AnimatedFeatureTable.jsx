// AnimatedFeatureTable.jsx
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const features = [
    "Fastest Route",
    "Shortest Route",
    "Real-Time Traffic Updates",
    "Public Transit Information",
    "Pedestrian Navigation",
    "Safety-Based Routing",
    "User Customization of Safety Preferences",
    "Community-Sourced Safety Data",
    "Live Location Sharing with Trusted Contacts",
    "Incident Reporting (Safety-Related)",
    "Accessibility Features",
    "Night Mode/Dark Mode",
]

const services = [
    "Google Maps",
    "Apple Maps",
    "Waze",
    "Citymapper",
    "SafeWalk (Proposed)",
]

const values = [
    [
        "✔",
        "✔",
        "✔",
        "✔",
        "✔",
        "",
        "",
        "",
        "Limited",
        "Limited",
        "✔",
        "✔",
    ],
    ["✔", "✔", "✔", "✔", "✔", "", "", "", "Limited", "", "✔", "✔"],
    [
        "✔",
        "✔",
        "✔",
        "",
        "",
        "",
        "",
        "Limited",
        "Limited",
        "Limited",
        "",
        "✔",
    ],
    ["✔", "✔", "✔", "✔", "✔", "", "", "", "", "", "✔", "✔"],
    ["✔", "✔", "✔", "", "✔", "✔", "✔", "✔", "✔", "✔", "", "✔"],
]

export default function AnimatedFeatureTable() {
    const [animate, setAnimate] = useState(false)
    const tableRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        if (tableRef.current) observer.observe(tableRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={tableRef}
            style={{
                overflowX: "auto",
                padding: 16,
                borderRadius: 16,
                background: "#ffffff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
        >
            <table
                style={{
                    borderCollapse: "collapse",
                    minWidth: 700,
                    width: "100%",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                textAlign: "left",
                                padding: "12px 16px",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#111827",
                                background: "#F3F4F6",
                            }}
                        >
                            FEATURES
                        </th>
                        {services.map((service, i) => (
                            <th
                                key={i}
                                style={{
                                    padding: "12px 16px",
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "#374151",
                                    background: "#F3F4F6",
                                }}
                            >
                                {service}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, rowIdx) => (
                        <tr key={rowIdx}>
                            <td
                                style={{
                                    padding: "12px 16px",
                                    borderBottom: "1px solid #E5E7EB",
                                    fontSize: 13,
                                    color: "#111827",
                                    fontWeight: 500,
                                }}
                            >
                                {feature}
                            </td>
                            {services.map((_, colIdx) => (
                                <td
                                    key={colIdx}
                                    style={{
                                        padding: "12px 16px",
                                        textAlign: "center",
                                        borderBottom: "1px solid #E5E7EB",
                                    }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={
                                            animate
                                                ? { opacity: 1, scale: 1 }
                                                : {}
                                        }
                                        transition={{
                                            delay:
                                                (rowIdx * services.length +
                                                    colIdx) *
                                                0.025,
                                        }}
                                        style={{
                                            display: "inline-block",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color:
                                                values[colIdx][rowIdx] === "✔"
                                                    ? "#10B981"
                                                    : "#F59E0B",
                                        }}
                                    >
                                        {values[colIdx][rowIdx] || ""}
                                    </motion.span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
