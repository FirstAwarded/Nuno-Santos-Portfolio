import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function HorizontalChart() {
    const data = [
        { label: "Safety over speed", value: 92 },
        { label: "Would use safety-first app", value: 88 },
        { label: "Unsafe navigation apps", value: 87 },
        { label: "Avoid poorly lit areas", value: 78 },
    ]

    const [animate, setAnimate] = useState(false)
    const chartRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.5 }
        )

        if (chartRef.current) observer.observe(chartRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <motion.div
            ref={chartRef}
            initial={{ opacity: 0, y: 20 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                width: "100%",
                maxWidth: 800,
                margin: "auto",
                padding: "32px 16px",
                background: "#F9FAFB",
                borderRadius: 20,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                fontFamily: "Inter, sans-serif",
            }}
        >
            <h2
                style={{
                    fontSize: 22,
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: 40,
                    color: "#111827",
                    lineHeight: 1.4,
                }}
            >
                Prioritising User Safety
                <span
                    style={{
                        fontWeight: 500,
                        display: "block",
                        fontSize: 16,
                        marginTop: 8,
                        color: "#4B5563",
                    }}
                >
                    Ranked insights from user research on safe navigation needs
                </span>
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: 24,
                }}
            >
                {data.map((item, index) => {
                    const delay = 0.2 + index * 0.15
                    const bg = `rgba(59,130,246, ${item.value / 100})`

                    return (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "#374151",
                                }}
                            >
                                {item.label}
                            </div>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={
                                    animate ? { width: `${item.value}%` } : {}
                                }
                                transition={{
                                    duration: 0.8,
                                    delay,
                                    ease: "easeOut",
                                }}
                                style={{
                                    height: 32,
                                    borderRadius: 8,
                                    background: bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    paddingRight: 12,
                                    color: "#ffffff",
                                    fontWeight: 600,
                                    fontSize: 14,
                                }}
                            >
                                {item.value}%
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}
