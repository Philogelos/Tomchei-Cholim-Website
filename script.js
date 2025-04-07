(function(){
    function scrollSmoothlyTo(element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
    
    function getIdFromInternalLink(link) {
      try {
        return decodeURIComponent(link.getAttribute('href').substring(1))
      } catch (e) {
        return link.getAttribute('href').substring(1)
      }
    }
    
    function handleInternalLinkClick(event) {
      const link = event.currentTarget
      const id = getIdFromInternalLink(link)
      const element = document.getElementById(id)
      
      if (!element) return
      scrollSmoothlyTo(element)
      history.pushState({ scrollTo: id }, '', link.href)
      event.preventDefault()
    }
    
    document.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener('click', handleInternalLinkClick)
    })
    
    //ToDo: add smooth scrolling on popstate (when navigating back and forward)
})()

// https://github.com/DaniBr/wikipedia-smooth-scroll/