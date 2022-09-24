import Link from 'next/link'


function index(props) {
  return (
    <div>
        <Link href={'/home'}></Link>
        <Link href={'/register'}></Link>
        <Link href={'/login'}></Link>
    </div>
  )
}

export default index