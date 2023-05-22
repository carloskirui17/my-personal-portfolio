import React from 'react';

export default function Login() {
	return (
		<>
			<div className='bg-gray-900'>
				<div class="w-full lg:max-w-xl md:max-h-xl mx-auto p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
					<h2 class="text-2xl font-bold text-gray-900 dark:text-white">
						Sign in to `Hospital Name`
					</h2>
					<form class="mt-8 space-y-6" action="#" method="post">
						<div>
							<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
							<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
						</div>
						<div>

							
							<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
							<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
							</div>
							<div class="ml-3 text-sm">
								<label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
							</div>
							<a href="#" class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
						</div>
						<button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
						<div class="text-sm font-medium text-gray-900 dark:text-white">
							Not registered yet? <a class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
						</div>
					</form>
				</div>
				</div>
		</>
	)
}