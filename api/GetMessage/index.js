module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaultss to 200 */
    body: { text: "Hellosaa from the API" },
  };
};
