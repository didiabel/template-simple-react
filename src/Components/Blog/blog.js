import './blog.css'
import foto1 from '../../img/nocheDeBrujas.jpg'
import foto2 from '../../img/educacion.jpg'

const blog = () => {
    return ( 
   <div className='seccionBlog'>
    <div className='blog'>
      <div className='pt1'>
          <h1>Episodio "Especial de Boche de Brujas VII", octubre 27, 1996</h1>
          <img className='imgblog' src={foto1}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem orci, imperdiet eu condimentum nec, iaculis non diam. Nullam in metus neque. Etiam at tellus nisl. Maecenas sed ex maximus metus dictum auctor. Etiam euismod mattis vehicula. Cras rhoncus egestas velit. In vitae pharetra nisi. Sed libero velit, mattis a velit ut, egestas scelerisque velit. Pellentesque egestas pulvinar felis finibus luctus. In congue luctus ipsum. Proin sed nisi nec dui tincidunt gravida. Nullam hendrerit gravida pellentesque. Donec hendrerit vulputate elit vel fringilla. Suspendisse potenti. Pellentesque rutrum vel felis in interdum. Suspendisse ultricies lorem in lorem varius hendrerit.</p>
        </div>
        <div className='pt2'>
          <h1>Episodio "Lucha educativa", Abril 16, 1995.</h1>
          <img className='imgblog' src={foto2}/>
          <p>buenisimo el meme</p>
      </div>
    </div>
   </div> );
}
 
export default blog;