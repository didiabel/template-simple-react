import './contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
      <form className='formcontacto'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Mensaje</label>
    <input type="text" className="inputmsje form-control"/>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
    </div>);
}
 
export default Contact;