 fetch('../data.json')
  .then(res => res.json())
  .then(data => {
    
    let listingsContainer = document.createElement('div');
    listingsContainer.classList.add("listings-cont");

    data.forEach(item => {
      // Create a div element for each item
      const listingItem = document.createElement('div');
      listingItem.classList.add('listing-item');

      // Fill in the HTML structure for the item
      listingItem.innerHTML = `
        <div class="title-and-info">
            <img class="listings-image" src="${item.logo}" alt="${item.company}">
            <div>
            <div class="a">
                <h2>${item.company}</h2>
                <div class="featured-cont">
                    ${item.new ? "<span class='new'> new! </span> " : ''}
                    ${item.featured ? "<span class='featured'> featured </span>" : ''}
                </div>
            </div>
            <h2 class="person-title">${item.position}</h2>
            <span class="time-posted-and-location">${item.postedAt} <span class="dots">.</span> ${item.contract} <span class="dots">.</span> ${item.location}</span>
            <hr>
            </div>
            </div>
            <div class="skills">
                <ul>
                    ${item.tools.map(tool => `<li class="skillsBtn">${tool}</li>`).join(' ')}
                    ${item.languages.map(language => `<li class="skillsBtn">${language}</li>`).join(' ')}
                </ul>
            </div>
        
      `;

      // Append the generated element to the listingsContainer
      listingsContainer.appendChild(listingItem);
    });
    document.querySelector('.container').appendChild(listingsContainer);

    let skillsBtns  = document.querySelectorAll('.skillsBtn')
    let form = document.querySelector('.form')
    let searchInput = document.querySelector('.search')
    let clearBtn = document.querySelector('.clearBtn')
    searchInput.addEventListener('onChange', filterListings(searchInput.value))
    skillsBtns.forEach((btn)=>{
      btn.addEventListener('click',function(){
        console.log(`skill btn: ${btn.innerHTML}`)
        form.style.display = 'flex'
        searchInput.value += ' '+ btn.innerHTML
        // searchInput.addEventListener('onInput',filterListings(searchInput.value))
        filterListings(searchInput.value);
        clearBtn.addEventListener('click',(e)=>{
          e.preventDefault();
          searchInput.value = '';
          filterListings('');

        })
      })
    })

     function filterListings(filterText) {
      const listingItems = document.querySelectorAll('.listing-item');
      listingItems.forEach((item) => {
        const skillsText = item.querySelector('.skills').textContent.toLowerCase();
        if (skillsText.includes(filterText.toLowerCase())) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }


  })


  // for(let i=0; i<skillsBtns.length; i++){
  //   console.log(skillsBtns[i].innerHTML)
  // }
