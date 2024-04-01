import axios from "axios";

// This component sends a request to the API route declared in the back end and simply logs the response, or the
// error message.

const DEV_URL = "http://localhost:8000/";

function ApiTestPage() {
  const getRandomNumber = async () => {
    try {
      let response = await axios.get(DEV_URL + "api/test/");
      console.log("Success! Random number is:", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  getRandomNumber();

  return (
    <div>
      <h1>This is the API test page.</h1>
    </div>
  );
}

export default ApiTestPage;