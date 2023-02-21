async function FetchNoti(address) {
  const resp = await fetch(
    "https://backend-staging.epns.io/apis/v1/users/eip155:80001:" +
      address +
      "/feeds?spam=true"
  );
  const json = await resp.json();
  console.log(json);

  //   const res = await response.json();
  //const stringifiedResponse = JSON.stringify(json);
  //const hlo = JSON.parse(stringifiedResponse);
  //const notification = hlo.feeds[0].payload.notification.body;
  // const title = notification.title;
  //const body = notification.body;

  
  return json;
}

export default FetchNoti;
