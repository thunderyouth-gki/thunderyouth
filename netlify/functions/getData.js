exports.handler = async () => {
  try {
    const url =
      `${process.env.GAS_URL}?secret=${process.env.API_SECRET}`;

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
