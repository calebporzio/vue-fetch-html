# vue-fetch-html

A little component for fetching html/vue/javascript from the server.

## Installation

`npm install --save-dev vue-fetch-html`

Import it into an existing component:
```
<script>
  import VueFetchHtml from 'vue-fetch-html'

  export default {
    components: { VueFetchHtml },
  
    ...
  }
</script>
```

Import the component globally:
```
import VueFetchHtml from 'vue-fetch-html'

Vue.component('vue-fetch-html', VueFetchHtml)
```

## Usage

```
<vue-fetch-html url="/some/endpoint">
  <loading-spinner slot="loading">
  
  <whoops-message slot="failed">
</vue-fetch-html>
```
