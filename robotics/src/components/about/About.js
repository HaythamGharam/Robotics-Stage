import {} from "./about.css";
import aboutbot from "../../images/PNG/aboutbot.png";
import whoabout from "../../images/who.png";
import target from "../../images/target.png";
import howabout from "../../images/how.png";

const About = () => {
  return (
    <>
      <section className="header">
        <img src={aboutbot} width="300px" className="aboutbot" />
      </section>
      <section id="about-us" className="aboutus-section blue-bg">
        <div className="about text-black">
          <div className="about-img-qs">
            <img src={whoabout} alt="whoabout" height="100px" width="100px" />
            <h2 className="mt-3 text-center">What is Lydia Jobs?</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            similique maiores, fuga sunt laudantium sint in dolor numquam culpa.
            Maxime dolorum ipsam perferendis, porro in iusto maiores eligendi
            ipsa laborum, libero debitis ad sapiente. Aliquid ab recusandae
            necessitatibus cupiditate cum quis odit? Quidem id optio voluptates,
            maiores alias, similique itaque incidunt repudiandae nulla ea
            temporibus! Reprehenderit consectetur dolore iste molestiae a ut,
            dicta porro eum quas tempore natus aperiam corrupti voluptatem sed
            nisi aliquam aspernatur ipsa dolorum ducimus, soluta dolores.
          </p>
        </div>
        <div className="about goal">
          <div className="about-img-qs">
            <img src={target} alt="target" height="100px" width="100px" />
            <h2 className="mt-3 text-center">What do we aim for?</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, dolores sed suscipit quaerat commodi expedita nesciunt
            magni unde iste quod repellat accusamus amet, maxime, atque harum.
            Quaerat, ipsa ut. Sequi vero nesciunt, dolores necessitatibus ex
            omnis ad magni nihil iusto, reprehenderit itaque cupiditate quod.
            Nostrum cupiditate adipisci maxime amet vitae!
          </p>
        </div>
        <div className="about text-black">
          <div className="about-img-qs">
            <img src={howabout} alt="howabout" height="100px" width="100px" />
            <h2 className="mt-3 text-center">How Lydia Jobs works?</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            in voluptate voluptatem illo voluptas molestiae nam iusto nemo
            expedita possimus repellendus autem magni impedit saepe ipsam ipsum
            porro illum ullam asperiores veniam consequuntur, debitis deserunt
            quia? Aliquid temporibus autem earum quaerat exercitationem iusto
            aut ducimus quod, totam animi, mollitia vero qui, omnis quibusdam.
            Placeat harum deleniti aspernatur sit commodi, aliquid cupiditate
            rerum eius odit dolores sunt eligendi libero dolorum dolorem?
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
