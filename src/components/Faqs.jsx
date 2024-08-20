import Food from "../assets/images/food_bg.png"

const Faqs = () => {
  return (
    <section id="faq relative">
    <div className="relative pt-8 md:pt-16">
        <img className="object-cover w-full h-[50vh]" src={Food} alt="food_bg" />
        <div className="absolute top-20 left-0 p-[15px] w-full lg:w-3/6 md:top-40 lg:left-8">
            <div className="text-4xl text-white border-white sm:border-b-4 w-fit">SIGN UP SPECIAL PROMOTIONS</div>
            <p className="py-6 text-lg text-white">Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
            <div className="flex gap-8">
                <div className="w-full ">
                    <input
                        type="email"
                        className="w-full h-[40px] p-2 bg-MidTransparent border border-white"
                        placeholder="Enter email address "
                        value=""
                    />
                </div>
                <div className="max-w-72 bg-Gold items-center justify-center flex hover:bg-white text-white hover:text-Gold duration-300 cursor-pointer active:scale-[0.98]">
                    <button className="px-8 py-2 sm:px-16">
                        <a className="" href="">Subscribe</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Faqs
