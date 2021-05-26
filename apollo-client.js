import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-ca-central-1.graphcms.com/v2/ckoyj898jcifb01z54fxug9y4/master",
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${token}`
      }    
});

export default client;