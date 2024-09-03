import { useEffect, useState } from 'react';

const countryCodes = [
	'1', // United States
	'44', // United Kingdom
	'33', // France
	'49', // Germany
	'34', // Spain
	'91', // India
	'86', // China
	'81', // Japan
	'61', // Australia
	'55', // Brazil
	'7', // Russia
	'27', // South Africa
	'82', // South Korea
	'61', // New Zealand
	'27', // South Africa
	'39', // Italy
	'31', // Netherlands
	'46', // Sweden
	'41', // Switzerland
	'52', // Mexico
	'90', // Turkey
	'65', // Singapore
	'64', // New Zealand
	'92', // Pakistan
	'98', // Iran
	'971', // United Arab Emirates
	'20', // Egypt
	'92', // Pakistan
	'47', // Norway
	'48', // Poland
	'86', // China
	'55', // Brazil
	'34', // Spain
	'61', // Australia
	'44', // United Kingdom
	'33', // France
	'49', // Germany
	'1', // United States
	'1', // Canada
	'39', // Italy
	'34', // Spain
	'7', // Russia
	'82', // South Korea
	'91', // India
	'62', // Indonesia
	'60', // Malaysia
	'63', // Philippines
	'81', // Japan
	'971', // United Arab Emirates
	'27', // South Africa
];

function App() {
	const [number, setNumber] = useState('');

	useEffect(() => {
		if (number.startsWith('08')) {
			setNumber(number.replace('08', '628'));
		}

		return () => {};
	}, [number]);

	return (
		<main className="min-h-screen bg-slate-800">
			<div className="flex flex-col w-full justify-center p-5 gap-5">
				<h1 className="text-4xl font-bold text-center text-white/90">
					Indonesia Whatsapp Number Generator
				</h1>

				<div className="flex flex-col">
					<span className="text-white/90 mb-1">Input Number</span>
					<input
						type="text"
						className="border p-2 rounded-md outline-none ring-0"
						inputMode="numeric"
						pattern="[0-9]"
						value={number}
						onChange={(e) => {
							setNumber(e.target.value.replace(/\D/g, ''));
						}}
					/>
				</div>
				{countryCodes.includes(number.substring(0, 2)) ||
				countryCodes.includes(number.substring(0, 3)) ? (
					<>
						<span className="text-white/90">Preview Number: {number}</span>
						<a
							className="bg-green-500 text-green-950 rounded-xl py-3 text-center hover:bg-green-600 transition duration-500"
							href={`https://wa.me/${number}`}
						>
							Open Whatsapp
						</a>
					</>
				) : null}
			</div>
		</main>
	);
}

export default App;
