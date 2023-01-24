import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { register } = router.query

  return <p>Post: {register}</p>
}

export default Post