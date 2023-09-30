fetch('../data.json')
.then(res => res.json())
.then((data)=>{
    console.log(data);
    // data.forEach((dat)=>{
        const listingsContainer = document.createElement('div')
        listingsContainer.classList.add("listings-cont");
        data.forEach((data)=>{
            return listingsContainer.innerHTML = 
        `
        <img class="listings-image" src="${data.logo}" alt="photosnap">
        <div class="title-and-info">
            <div class="a">
            <h2>${data.company}</h2>
            <div class="featured-cont">
                <span class="new">new!</span>
                <span class="featured">featured</span>
            </div>
            </div>
            <h2 class="person-title">${data.position}</h2>
            <strong class="time-posted-and-location">${data.postedAt}<span class="dots">.</span> ${data.contract} <span class="dots">.</span> ${data.location}</strong>
            <hr>
            <div class="skills">
            <ul>
                <li> ${data.languages.forEach((language)=>{return language})} </li>
            </ul>
            </div>
        </div>
        
        `
        })

        document.querySelector('.container').appendChild(listingsContainer);
    // })
})