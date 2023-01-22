import { useState } from "react";
import { Link } from "react-router-dom";
import {} from "./home.css";
import homebot from "../../images/PNG/homebot.png"
import yessine from "../../images/members/yessine.jpg";
import imen from "../../images/members/imen.jpeg";
import committee from "../../images/members-section-cover.png";
import arduino from "../../images/arduino-training.jpg";
import activities from "../../images/activities-section-cover.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "./Image.js";

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

  const btnstyles = {
    background: "rgb(229,246,255)",
    width: "200px",
    borderradius: "30px",
    padding: "13px",
    boxshadow: "5px 5px #F8F3FC",
    fontweight: "500",
    color: "black",
  };

  return (
    <div className="home-wrapper">
      <section className="header">
        <img src={homebot} width="300px" className="homebot"/>
        <div className="header-content pb-16">
          <h1> IIT Robotics Club </h1>
          <br />
          <p>Embrace The Robolution</p>
          <br />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
      </section>

      {/* Members region start */}
      <section className="members-section m-auto w-full">
        <div className="title-area flex justify-center items-center md:my-10">
          <img src={committee} alt="cover" className="w-64 h-64 section-bot" />
          <h1 className="section-title text-center font-bold text-4xl">
            Our Executive Board
          </h1>
        </div>

        <div className="members-container grid grid-cols-3">

          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={yessine} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
            <Image src={imen} />
            <div className="p-5 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
        </div>
      </section>
      {/* members region end */}

      {/* join us region start*/}
      <section className="home-bottom py-20">
        <div>
          <div>
            <h1 className="section-title text-center font-bold text-5xl">
              Join us right now!
            </h1>
            <p className="text-center font-semibold text-2xl w-3/4 m-auto">
              <br /> Whether you are a beginner or an expert, IIT Robotics Club
              has a lot to offer to you and welcomes you as part of its family
            </p>
          </div>
          <Link to="/joinForm">
            <Button variant="contained" size="large" sx={btnstyles}>
              Join Us
            </Button>
          </Link>
        </div>
      </section>
      {/* join us region end */}

      {/* activities region start */}
      <section>
        <div className="title-area flex justify-center items-center md:my-10">
          <img src={activities} alt="cover" className="w-64 h-64 section-bot" />
          <h1 className="section-title text-center font-bold text-4xl">
            Our Latest Activities
          </h1>
        </div>
        <div className="activities-display">
          <div className="activity">
            <img src={arduino} alt="#" className="act-img" />
            <h3 className="act-title text-white font-bold">Arduino Training</h3>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              omnis!
            </p>
            <div className="flex justify-center">
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
                  <Button onClick={handleClose}>Done</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className="activity">
            <img src={arduino} alt="#" className="act-img" />
            <h3 className="act-title text-white font-bold">Arduino Training</h3>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              omnis!
            </p>
            <div className="flex justify-center">
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
                  <Button onClick={handleClose}>Done</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className="activity">
            <img src={arduino} alt="#" className="act-img" />
            <h3 className="act-title text-white font-bold">Arduino Training</h3>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              omnis!
            </p>
            <div className="flex justify-center">
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
                  <Button onClick={handleClose}>Done</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
