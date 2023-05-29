// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul>
      {blogList.map(blogItem => (
        <BlogItem blogItem={blogItem} key={blogItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
