import HomePage from 'app/home/page'
import NotFound from 'app/notfound/page'
import Relax from 'app/relax/page'
import { useRouter } from 'next/router'
import { JSX } from 'react'

import Blog, { BlogProps } from './blog'

const IndexPage: React.FC<BlogProps> = (props) => {
  const router = useRouter()

  let pageComponent: JSX.Element

  switch (router.pathname) {
    case '/blog':
      pageComponent = <Blog {...props} />
      break
    case '/relax':
      pageComponent = <Relax />
      break
    case '/':
      pageComponent = <HomePage />
      break
    default:
      pageComponent = <NotFound />
  }

  return <>{pageComponent}</>
}

export default IndexPage
