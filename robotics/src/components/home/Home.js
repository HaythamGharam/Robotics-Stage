import { useState } from "react";
import { Link } from "react-router-dom";
import {} from "./home.css";
import yessine from "../../images/members/yessine.jpg";
// import event from "../../images/arduino-training.jpg";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isShown, setIsShown] = useState(false);

  const onMouseEnter = () => {
    setIsShown(true);
  };

  const onMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div className="home-wrapper">
      <section className="header">
        <div className="header-content pb-16">
          <h1> IIT Robotics Club </h1>
          <br />
          <p>Embrace The Robolution</p>
        </div>
      </section>

      {/* Members region start */}
      <section className="members-section m-auto w-full">
        <div className="title-area flex justify-center md:my-16">
          <h1 className="section-title text-center font-bold text-4xl">
            Our Committee Members
          </h1>
        </div>
        <div className="members-container grid grid-cols-3">
          <div className="max-w-xs bg-white flex flex-col justify-center items-center relative">
            <img
              className="rounded-full w-64 h-64"
              src={yessine}
              alt="Med Yessine Ksibi"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              style={{ filter: isShown ? "blur(2px)" : "none" }}
            />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <div
                className="member-socials"
                style={{ display: isShown ? "inline-block" : "none" }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a href="https://facebook.com" target="_blank">
                  <button className="facebook">
                    <i class="fab fa-facebook"></i>
                  </button>
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <button className="linkedin">
                    <i class="fab fa-linkedin"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <div className="flex justify-center">
              <Button variant="contained" onClick={handleClickOpen}>
                Read More
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Lorem ipsum dolor sit amet consectetur"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe nihil accusamus soluta tenetur cumque quas nemo,
                    facilis explicabo culpa doloribus provident perspiciatis,
                    non error veritatis ducimus quo dolores possimus
                    repudiandae..
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
              </Dialog>
            </div> */
}
