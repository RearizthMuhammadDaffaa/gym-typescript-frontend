import Logo from "@/assets/Logo.png"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="logo" />
        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam at repellat dolorem laudantium, fugit ex, quisquam doloribus nostrum sunt inventore libero omnis!</p>
        <p>© All Rights Reserved</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">links</h4>
        <p className="my-5">Massa Orci Senectus</p>
        <p className="my-5">Et Gravida Blab bala </p>
        <p>Ullamcorper vivamus</p>
      </div>
      
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        
        <p>(333)-231-2133</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer