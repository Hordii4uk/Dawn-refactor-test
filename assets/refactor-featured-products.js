class FeaturedProducts extends HTMLElement {
  constructor() {
    super();
    
    this.initSection();
  }

  initSection() {
    document.addEventListener('product:added', async (event) => {
      const section = document.querySelector('#FeaturedProducts');
      const id = section.dataset.sectionId;
      console.log("Event:", event)
      try {
        let markup = await (await fetch(`?section_id=${id}`)).text();
        section.innerHTML = markup;
      } catch (error) {
        console.error('Fetch failed: ', error);
      } 
    })
  }

}
customElements.define('featured-products', FeaturedProducts);