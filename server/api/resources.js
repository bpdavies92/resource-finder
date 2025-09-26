export default defineEventHandler(async (event) => {


    const data  = await $fetch(`https://curly-space-system-9vv44jx96qx37wxq-8000.app.github.dev/resources`)

    return data

})