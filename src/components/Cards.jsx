import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
const Cards = () => {
    
  return (
    <section id="meetchef">
      <div className="pt-12 md:grid-cols-2 md:grid">
        <div className="cursor-pointer">
          <img className="w-full" src={image1} alt="img" />
        </div>
        <div className="cursor-pointer">
          <img className="w-full" src={image2} alt="img" />
        </div>
        <div className="cursor-pointer">
          <img className="w-full" src={image3} alt="img" />
        </div>
        <div className="cursor-pointer">
          <img className="w-full" src={image4} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
