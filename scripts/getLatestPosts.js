function displayLatestPosts() {
	let posts = [];
	fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
		.then((response) => response.json())
		.then((postsObject) => {
			posts = postsObject;
			// console.log(`posts = ${posts}`);
			contentContainer = document.getElementById("latest-posts-container");
			// // console.log(contentContainer)
			for (const post of posts) {
				// console.log(post);
				contentCard = document.createElement("div");
				classes =
					"latest-post flex flex-col p-6 border border-[#12132D26] rounded-3xl gap-4".split(
						" "
					);
				contentCard.classList.add(...classes);
				contentCard.innerHTML = `
        <img src="${post.cover_image}" alt="" class="max-h-[326px] min-w-[190px] rounded-2xl">
        <div class="date-area flex items-center gap-2">
          <i class="fa-regular fa-calendar"></i>
          <h6 class="post-date">
            ${post.author.posted_date?post.author.posted_date:'No publish date'}
          </h6>
        </div>
        <h3 class="post-title text-lg font-extrabold leading-[30px]">
          ${post.title}
        </h3>
        <p class="post-desc leading-[26px]">
        ${post.description}
        </p>
        <div class="user-area flex gap-4">
          <img src="${post.profile_image}" alt="" class="w-[44px] h-[44px] rounded-full ">
          <div class="name-designation flex flex-col">
            <h6 class="name font-bold">
              ${post.author.name}
            </h6>
            <h6 class="designation text-sm text-[#12132D99]">
            ${post.author.designation?post.author.designation:'Unknown'}
            </h6>
          </div>
        </div>
    `;
				contentContainer.appendChild(contentCard);
			}
		});
}

displayLatestPosts();
