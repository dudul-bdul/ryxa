import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  comment: {
    use: ['Giscus', 'Webmention'],
    style: 'boxed',
    giscus: {
      src: 'https://giscus.kwchang0831.dev/client.js',
      repo: 'kwchang0831/ryxa',
      repoID: 'R_kgDOHPrjlQ',
      category: 'Comments',
      categoryID: 'DIC_kwDOHPrjlc4CO0AG',
      mapping: 'title',
      inputPosition: 'top',
      reactionsEnabled: true,
      emitMetadata: false,
      loading: 'lazy',
      lang: 'en-US',
      theme: 'dark'
    },
    webmention: {
      username: 'www.ryzahrawedding.com',
      sortBy: 'created',
      sortDir: 'down',
      form: true,
      commentParade: true
    }
  }
}
