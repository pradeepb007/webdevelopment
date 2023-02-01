import axios from "axios"

export const api = axios.create({
    baseURL: ''
})

export const getPosts = async () => {
    const response = await api.get('https://dev1services.shotclasses.com/api/v3/me/ShotClasses/assigned/none?pageNum=1&pageSize=20&Locale=en-GB',
        {
            headers: {
              Accept: "application/json",
              AuthenticationToken:
                "2h1OLSv5Z3wNo/MxNUXF19yzs620KPv3kLOIOgVgyxWxUvCtUz8bsGBeB7X/mbVkA6I62zjMwrYwbQZf0GXzjQ==",
              TenantSlugName: "UnileverDevPodcast",
            },
    })
    return response.data.Content
}