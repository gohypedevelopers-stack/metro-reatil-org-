const query = `
  query {
    __type(name: "ProjectImages") {
      fields {
        name
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
