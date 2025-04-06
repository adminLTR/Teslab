export default function Header() {
    return <header className='flex items-center justify-start sm:justify-around p-5 border-b-2 border-sky-900 mb-10'>
        <div id="container-logo-head">
            <img width={150} src="/logo.png" alt="logo-teslab-head"/>
        </div>
        <div className="sm:flex hidden items-center justify-center">
            <a className='text-sky-900 mx-4 font-bold' href="#">Inicio</a>
            <a className='text-sky-900 mx-4 font-bold' href="#">Equipo</a>
            <a className='text-sky-900 mx-4 font-bold' href="#">Ayuda</a>
        </div>
  </header>
}