async function testForm() {
  const formId = "60";
  const apiUrl = "https://cms.metroretailsolutions.in/wp-json/contact-form-7/v1/contact-forms/" + formId + "/feedback";

  const formData = new FormData();
  formData.append("_wpcf7_unit_tag", "wpcf7-f" + formId + "-p1-o1");
  formData.append("fullName", "Test Name");
  formData.append("emailAddress", "test@example.com");
  formData.append("phoneNumber", "1234567890");
  formData.append("companyName", "Test Co");
  formData.append("serviceType", "Retail");
  formData.append("budgetRange", "Under 100k");
  formData.append("projectMessage", "This is a test message from node API");

  console.log("Sending POST to", apiUrl);
  
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      body: formData
    });
    
    const data = await res.json();
    console.log("HTTP Status:", res.status);
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch(e) {
    console.error(e);
  }
}

testForm();
