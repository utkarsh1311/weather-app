const App = () => {
	return (
		<div className='text-white lg:w-screen mx-auto flex gap-8 flex-col items-center justify-center bg-no-repeat bg-cover bg-hero w-screen h-screen overflow-hidden'>
			<form className='lg:w-1/3 w-4/5 md:w-1/2 ' action=''>
				<input
					className='h-16 text-xl backdrop-blur bg-opacity-70 bg-gray-800 w-full px-6 font-bold rounded-xl focus:outline-none'
					type='text'
					placeholder='Enter city'
				/>
			</form>
			<div className='backdrop-filter bg-gray-800 backdrop-blur-sm bg-opacity-60 lg:w-1/3 md:w-1/2 md:p-12 justify-evenly p-6 lg:gap-6  flex  flex-col lg:h-1/2  h-fit rounded-xl w-4/5'>
				<div className='lg:h-1/3 flex items-center'>
					<img
						className='w-1/2 '
						src='https://openweathermap.org/img/wn/10d@2x.png'
						alt=''
					/>
					<h2 className='justify-self-center text-5xl font-bold'>40&#176;C</h2>
				</div>
				<div>
					<h2 className='text-2xl lg:text-3xl font-bold'>Gorakhpur IN</h2>
					<p className='text-sm'>24 May 2019</p>
					<p className='mt-4 lg:text-xl font-semibold text-lg'>
						Feels like 38&#176;C, Clear sky, gentle breeze
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
