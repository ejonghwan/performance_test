
    

    function tab() {
        const eles = document.querySelectorAll('.item')
        for(let i = 0; i < eles.length; i++) {
            eles[i].querySelector('dt > button').addEventListener('click', function(e) {
                if(!this.classList.contains('active')) {
                    this.classList.add('active')
                    eles[i].parentElement.querySelector('.code_wrap').classList.add('active')
                    eles[i].parentElement.classList.add('on')
                } else {
                    this.classList.remove('active')
                    eles[i].parentElement.querySelector('.code_wrap').classList.remove('active')
                    eles[i].parentElement.classList.remove('on')
                }
                
                // console.log(eles[i].parentElement)
                // console.log(this)
            })
        }
    }
    tab();


    const links = document.querySelectorAll('link')
    const scripts = document.querySelectorAll('script')
    const getDate = new Date()
    const minute = getDate.getMinutes()
    // console.log(minute)
    function cache() {
        for(let i = 0; i < links.length; i++) {
            links[i].setAttribute('href', links[i].getAttribute('href') + `?ver${minute}`) 
        }
        // for(let i = 0; i < scripts.length; i++) {
        //     scripts[i].setAttribute('src', scripts[i].getAttribute('src') + `?ver${minute}`) 
        // }
        // console.log(links)
    }
    // cache();


    // console.log('asdasd', SideBar.render())

   
