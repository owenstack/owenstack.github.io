import BlogPage from 'components/BlogPage'
import PreviewBlogPage from 'components/PreviewBlogPage'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

export interface BlogProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: BlogProps) {
  const { posts, settings, draftMode } = props

  if (draftMode) {
    return <PreviewBlogPage posts={posts} settings={settings} />
  }

  return <BlogPage posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<BlogProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
