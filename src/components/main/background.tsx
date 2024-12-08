export default function MainBackground() {
	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{
					backgroundImage: "url('/bg-food.png')",
					backgroundSize: '200px',
				}}
			/>
			<div className="absolute inset-0 bg-snow bg-opacity-65" />
		</>
	);
}
