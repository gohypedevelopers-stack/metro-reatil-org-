const query = `
  query AllProjects {
    projects(first: 1) {
      nodes {
        projectImages {
          galleryImage1 { node { sourceUrl } }
          galleryimage2 { node { sourceUrl } }
          galleryimage3 { node { sourceUrl } }
          galleryimage4 { node { sourceUrl } }
          galleryimage5 { node { sourceUrl } }
          galleryimage6 { node { sourceUrl } }
          galleryimage7 { node { sourceUrl } }
          galleryimage8 { node { sourceUrl } }
          galleryimage9 { node { sourceUrl } }
          galleryimage10 { node { sourceUrl } }
        }
      }
    }
  }
`;

fetch('https://cms.metroretailsolutions.in/graphql', { 
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' }, 
  body: JSON.stringify({ query }) 
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data, null, 2)));
