```meta
  category: Layout
  description: "Use to add a title, description and main actions to pages."
```

`import PageHeader from 'cosmos/page-header'`

```jsx
<PageHeader
  title="Clients"
  description={{
    text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
    learnMore: '/clients'
  }}
  actions={{
    primaryAction: {
      label: 'Create Client',
      icon: 'plus',
      method: null
    },
    secondaryAction: {
      label: 'Tutorial',
      icon: 'play-circle',
      method: null
    }
  }}
/>
```
