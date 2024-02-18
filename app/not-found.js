import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='not-found'>
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find the requested page!</p>
      <Link href="/" style={{ textDecoration: 'none', color: 'whitesmoke', fontWeight: '800', cursor: 'pointer'}}>Return Home</Link>
    </main>
  )
}

export default NotFound
