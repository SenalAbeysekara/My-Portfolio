import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif, title, issuer, date }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": { opacity: 1 },
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-image": {
							filter: "contrast(1.05) brightness(1) saturate(1.1)",
						},
					},
				}}>
				{/* Certificate Image */}
				<Box
					sx={{
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0, left: 0, right: 0, bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						},
					}}>
					<img
						className="certificate-image"
						src={ImgSertif}
						alt={title || "Certificate"}
						style={{
							width: "100%",
							height: "auto",
							display: "block",
							objectFit: "cover",
							filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
							transition: "filter 0.3s ease",
						}}
						onClick={handleOpen}
					/>
				</Box>

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0, left: 0, right: 0, bottom: 0,
						opacity: 0,
						transition: "all 0.3s ease",
						cursor: "pointer",
						zIndex: 2,
					}}
					onClick={handleOpen}>
					<Box
						className="hover-content"
						sx={{
							position: "absolute",
							top: "50%", left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							textAlign: "center",
							width: "100%",
							color: "white",
						}}>
						<FullscreenIcon sx={{ fontSize: 40, mb: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
						<Typography variant="h6" sx={{ fontWeight: 600, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
							View Certificate
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Title & Issuer below the image */}
			<Box sx={{ mt: 1.5, px: 0.5 }}>
				{title && (
					<Typography
						variant="subtitle1"
						sx={{
							color: "#e2e8f0",
							fontWeight: 600,
							fontSize: "0.95rem",
							lineHeight: 1.3,
							mb: 0.4,
						}}>
						{title}
					</Typography>
				)}
				{issuer && (
					<Typography
						variant="body2"
						sx={{
							color: "#a78bfa",
							fontSize: "0.8rem",
							fontWeight: 500,
						}}>
						{issuer}
					</Typography>
				)}
				{date && (
					<Typography
						variant="body2"
						sx={{
							color: "#64748b",
							fontSize: "0.75rem",
							mt: 0.3,
						}}>
						{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
					</Typography>
				)}
			</Box>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						outline: "none",
					}}>
					{/* Close Button */}
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16, top: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							zIndex: 1,
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}
						size="large">
						<CloseIcon sx={{ fontSize: 24 }} />
					</IconButton>

					{/* Modal Image */}
					<img
						src={ImgSertif}
						alt={title || "Certificate Full View"}
						style={{
							display: "block",
							maxWidth: "100%",
							maxHeight: "90vh",
							margin: "0 auto",
							objectFit: "contain",
						}}
					/>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate