
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer flex'>
      <section className='left-section'>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>   
      </section>
      <section className='right-section'>
        <div className='copy'>
          by ahmed. All Rights Reserve
        </div>
      </section>
    </footer>
  )
}

export default Footer