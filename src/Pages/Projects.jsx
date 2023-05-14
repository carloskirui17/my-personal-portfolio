import React from 'react';

export default function Projects() {
	return (
		<>
			<div id="toast-default" class="fixed mt-[655px] ml-[1355px] flex items-center w-56 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 bg-slate-700" role="alert">
				<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
					<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
					<span class="sr-only">Fire icon</span>
				</div>
				<div class="ml-3 text-sm font-normal">Set yourself free.</div>
				<button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
					<span class="sr-only">Close</span>
					<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				</button>
			</div>
			<section class="bg-white dark:bg-gray-900">
				<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
					<div class="grid md:grid-cols-2 gap-8">
						{/* Card 1 */}

						<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:p-1">
							<a href="#">
								<img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
							</a>
							<div class="p-5">
								<a href="#">
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
							</div>
						</div>

						{/* Card 2 */}
						<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
							<a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
								<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path clip-rule="evenodd" fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
								</svg>
								Code
							</a>
							<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">I've Scoured the Web looking for fun and engaging projects to build. As I was conducting my studies, I stumbled upon some challenging but fun projects to build.</h2>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
							<a target="_blank" href="https://medium.com/search?q=web+dev+projects" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
								<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
								</svg>
							</a>
						</div>
						{/* Card 3 */}
						<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
							<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Check Out my Github Profile to see all my projects</h2>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Are you a developer and are looking for projects to build??</p>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">If so? Then I think you should read more! Button Below by the way</p>
							<a target="_blank" href="https://medium.com/search?q=projects" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
								<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
								</svg>
							</a>
						</div>
						{/* Card 4 */}
						<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
							<a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
								<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path clip-rule="evenodd" fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
								</svg>
								Code
							</a>
							<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">I've Scoured the Web looking for fun and engaging projects to build. As I was conducting my studies, I stumbled upon some challenging but fun projects to build.</h2>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
							<a target="_blank" href="https://medium.com/search?q=web+dev+projects" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
								<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
								</svg>
							</a>
						</div>
						{/* Card 5 */}
						<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
							<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Check Out my Github Profile to see all my projects</h2>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Are you a developer and are looking for projects to build??</p>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">If so? Then I think you should read more! Button Below by the way</p>
							<a target="_blank" href="https://github.com/maninthehood?tab=repositories" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
								<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
								</svg>
							</a>
						</div>
						{/* Card 6 */}
						<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
							<a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
								<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path clip-rule="evenodd" fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
								</svg>
								Code
							</a>
							<h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">I've Scoured the Web looking for fun and engaging projects to build. As I was conducting my studies, I stumbled upon some challenging but fun projects to build.</h2>
							<p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
							<a target="_blank" href="https://medium.com/search?q=web+dev+projects" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
								<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
								</svg>
							</a>
						</div>
					</div>

				</div>
			</section>



		</>
	);
}
