/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import vuetify from '../src/plugins/vuetify'
// Components
import App from './App.vue'

// Composables
import {createApp, h, provide} from 'vue'
import {ApolloClient, InMemoryCache} from "@apollo/client/core";
import {DefaultApolloClient} from "@vue/apollo-composable";
import {createApolloProvider} from "@vue/apollo-option";

const cache: InMemoryCache = new InMemoryCache();
const apolloCLient = new ApolloClient({
  cache,
  uri: "http://localhost:3002/graphql"
})
const apolloProvider = createApolloProvider({
  defaultClient: apolloCLient
})
const app = createApp(App)
app.use(apolloProvider)
app.use(vuetify)
app.mount('#app')
