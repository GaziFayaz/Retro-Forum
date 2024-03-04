function addContentToReadSection(id) {
  contentTitle = document.getElementById(id).children["1"].children["1"].innerText
  contentViews = document.getElementById(id).children["1"].children["3"].children["1"].children["1"].innerText
	readContainer = document.getElementById("read-container");
	readContent = document.createElement("div");
	classes = "read-content flex p-4 bg-white rounded-2xl justify-between".split(
		" "
	);
	readContent.classList.add(...classes);
	readContent.innerHTML = `
          <h3 class="content-title">${contentTitle}</h3>
							<div class="impressions flex items-center gap-2">
								<i class="fa-regular fa-eye"></i>
								<p class="impression-count">${contentViews}</p>
							</div>
        `;
	readContainer.appendChild(readContent);
	document.getElementById("read-count").innerText++;
}

function searchByCategory(){
  
  // searchInput = document.getElementById("search-input").value.toLowerCase()
  // console.log(searchInput)
  // document.getElementById("content-container").innerHTML='<span class="loading loading-spinner loading-lg"></span>';
  // setTimeout(() => {
  //   document.getElementById("content-container").innerHTML=""
  // let posts
	// fetch("https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName")
	// 	.then((response) => response.json())
	// 	.then((postsObject) => {
	// 		console.log(`posts = ${postsObject.posts}`);
	// 		contentContainer = document.getElementById("content-container");
	// 		// // console.log(contentContainer)
	// 		for (const post of posts) {
	// 			// console.log(post);
	// 			contentCard = document.createElement("div");
	// 			contentCard.setAttribute("id", post.id);
	// 			classes =
	// 				"content-card w-full p-10 flex flex-col lg:flex-row gap-6 bg-[#F3F3F5] rounded-3xl items-center".split(
	// 					" "
	// 				);
	// 			contentCard.classList.add(...classes);
	// 			contentCard.innerHTML = `
  //   <div class="image-area relative min-h-[72px] h-[72px] min-w-[72px] max-w-[72px]">
	// 							<img src="${post.image}" alt="" class="h-[72px] w-[72px] rounded-2xl" />
	// 							<i
	// 								class="fa-solid fa-circle absolute -top-1 -right-1 ${
	// 									post.isActive ? "text-green-500" : "text-red-500"
	// 								}"
	// 							></i>
	// 						</div>
	// 						<div class="card-details flex flex-col">
	// 							<div class="category-author flex gap-5">
	// 								<h3 class="category"># ${post.category}</h3>
	// 								<h3 class="author">Author: ${post.author.name}</h3>
	// 							</div>
	// 							<h1 class="card-title">
	// 								${post.title}
	// 							</h1>
	// 							<p class="card-desc">
	// 								${post.description}
	// 							</p>
	// 							<div class="interactions-duration flex gap-6 w-full">
	// 								<div class="comment-count flex gap-3 items-center">
	// 									<i class="fa-regular fa-message"></i>
	// 									<h6>${post.comment_count}</h6>
	// 								</div>
	// 								<div class="impressions flex gap-3 items-center">
	// 									<i class="fa-regular fa-eye"></i>
	// 									<h6>${post.view_count}</h6>
	// 								</div>
	// 								<div class="expected-read-time  flex gap-3 items-center">
	// 									<i class="fa-regular fa-clock"></i>
	// 									<h6>${post.posted_time} min</h6>
	// 								</div>
	// 								<button class="btn rounded-full py-0 bg-green-500 item place-self-end" onClick=addContentToReadSection(${post.id})>
	// 									<i class="fa-regular fa-envelope-open text-white font-bold"></i>
	// 								</button>
	// 							</div>
  //   `;
	// 			contentContainer.appendChild(contentCard);
	// 		}
	// 	});
  // }, 2000);
  
}

function displayPosts(url) {
	let posts = [];
	fetch(url)
		.then((response) => response.json())
		.then((postsObject) => {
			posts = postsObject.posts;
			console.log(`posts = ${posts}`);
			contentContainer = document.getElementById("content-container");
			// // console.log(contentContainer)
			for (const post of posts) {
				// console.log(post);
				contentCard = document.createElement("div");
				contentCard.setAttribute("id", post.id);
				classes =
					"content-card w-full p-10 flex flex-col lg:flex-row gap-6 bg-[#F3F3F5] rounded-3xl items-center".split(
						" "
					);
				contentCard.classList.add(...classes);
				contentCard.innerHTML = `
    <div class="image-area relative min-h-[72px] h-[72px] min-w-[72px] max-w-[72px]">
								<img src="${post.image}" alt="" class="h-[72px] w-[72px] rounded-2xl" />
								<i
									class="fa-solid fa-circle absolute -top-1 -right-1 ${
										post.isActive ? "text-green-500" : "text-red-500"
									}"
								></i>
							</div>
							<div class="card-details flex flex-col">
								<div class="category-author flex gap-5">
									<h3 class="category"># ${post.category}</h3>
									<h3 class="author">Author: ${post.author.name}</h3>
								</div>
								<h1 class="card-title">
									${post.title}
								</h1>
								<p class="card-desc">
									${post.description}
								</p>
								<div class="interactions-duration flex gap-6 w-full">
									<div class="comment-count flex gap-3 items-center">
										<i class="fa-regular fa-message"></i>
										<h6>${post.comment_count}</h6>
									</div>
									<div class="impressions flex gap-3 items-center">
										<i class="fa-regular fa-eye"></i>
										<h6>${post.view_count}</h6>
									</div>
									<div class="expected-read-time  flex gap-3 items-center">
										<i class="fa-regular fa-clock"></i>
										<h6>${post.posted_time} min</h6>
									</div>
									<button class="btn rounded-full py-0 bg-green-500 item place-self-end" onClick=addContentToReadSection(${post.id})>
										<i class="fa-regular fa-envelope-open text-white font-bold"></i>
									</button>
								</div>
    `;
				contentContainer.appendChild(contentCard);
			}
		});
}

displayPosts("https://openapi.programming-hero.com/api/retro-forum/posts");
