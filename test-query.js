const query = `
  query AllProjects {
    projects(first: 1) {
      nodes {
        projectImages {
          galleryImage1 { node { sourceUrl } }
          galleryImage2 { node { sourceUrl } }
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
