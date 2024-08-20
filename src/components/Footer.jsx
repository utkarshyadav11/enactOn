import Signature4 from "../assets/svg/signature4.svg"
import Quality from "../assets/svg/quality.svg"
import Support from "../assets/svg/support.svg"
import Shipping from "../assets/svg/shipping.svg"

const Footer = () => {
  return (
    <section id="footer">
    <footer>
        <div className="flex flex-col gap-4 px-4 pt-4 md:pt-16 md:px-12 md:flex md:flex-row md:justify-between">
            <div className="flex gap-4">
                <div>
                    <img src={Shipping} alt="image" />
                </div>
                <div className="">
                    <p className="text-Gold">FREE SHIPPING WORLDWIDE</p>
                    <p className="text-white">Guarnteed Delivery</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <img src={Support} alt="image" />
                </div>
                <div className="">
                    <p className="text-Gold">24/7 CUSTOMER SERVICE</p>
                    <p className="text-white">Text Us 24/7 at 070-7782-9137</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <img src={Quality} alt="image" />
                </div>
                <div className="">
                    <p className="text-Gold">QUALITY GUARANTEE!</p>
                    <p className="text-white">Send Within 30 Days</p>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center mt-8 border-t-8 border-Gold">
            <img src={Signature4} alt="signature" />
        </div>
    </footer>
</section>

  )
}

export default Footer
