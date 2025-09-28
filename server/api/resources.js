
export default defineEventHandler(async (event) => {
    
// Get all query params as an object
  const principles = getQuery(event)

  // Convert to query string
  const searchParams = new URLSearchParams(principles)

  // Forward to external API with those params
  const data = await $fetch(
    `https://curly-space-system-9vv44jx96qx37wxq-8000.app.github.dev/resources?${searchParams.toString()}`
  )

  return { data, principles }
})