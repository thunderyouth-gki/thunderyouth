exports.handler = async (event) => {
  try {

    const page =
      event.queryStringParameters.page || "";

    const url =
      `${process.env.GAS_URL}?secret=${process.env.API_SECRET}&page=${page}`;

    const response = await fetch(url);

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };

  }
};
