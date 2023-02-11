import { useState } from "react";
import { Link } from "react-router-dom";
import {} from "./home.css";
import homebot from "../../images/PNG/homebot.png";
import yessine from "../../images/members/yessine.png";
import imen from "../../images/members/imen.png";
import firas from "../../images/members/firas.png";
import bilel from "../../images/members/bilel.png";
import fatma from "../../images/members/fatma.png";
import oumaima from "../../images/members/oumaima.png";
import jihen from "../../images/members/jihen.png";
import najd from "../../images/members/najd.png";
import yosr from "../../images/members/yosr.png";
import iskander from "../../images/members/iskandar.png";
import committee from "../../images/members-section-cover.png";
import arduino from "../../images/arduino-training.jpg";
import formationArduino from "../../images/formation-arduino.jpg";
import ai from "../../images/formation-ai.jpg";
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
        <img src={homebot} width="300px" className="homebot" />
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
            <Image
              src={yessine}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/medyessine.ksibi.56"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Mohamed Yessine Ksibi
              </h5>
              <p className="text-center">Chairman</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={imen}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/imen.khlif.50"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Imen Khlif
              </h5>
              <p className="text-center">General Secretary</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={firas}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/firas.raouin"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Firas Raouin
              </h5>
              <p className="text-center">Communication Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={bilel}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/bilel.baccour.3"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Bilel Baccour
              </h5>
              <p className="text-center">Logistics Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={fatma}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/fatoum.fafou"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Fatma Mbarek
              </h5>
              <p className="text-center">Media Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={oumaima}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/makboul.oumaima"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Oumaima Makboul
              </h5>
              <p className="text-center">Design Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={jihen}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/profile.php?id=100081130721685"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Jaweher Khelifi
              </h5>
              <p className="text-center">Treasury Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={najd}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/profile.php?id=100009968581035"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Najd Mseddi
              </h5>
              <p className="text-center">Marketing Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={yosr}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/profile.php?id=100010120291088"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Yosr Sellami
              </h5>
              <p className="text-center">Event Manager</p>
            </div>
          </div>
          <div className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative">
          <Image
              src={iskander}
              icon1="facebook"
              icon2="linkedin"
              link1="https://www.facebook.com/iskanderG4"
              link2="https://linkedin.com"
            />
            <div className="mb-7 flex justify-center flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
                Iskander Souissi
              </h5>
              <p className="text-center">Technical Manager</p>
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
            <img src={formationArduino} alt="#" className="act-img" />
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
            <img src={ai} alt="#" className="act-img" />
            <h3 className="act-title text-white font-bold">Ai Training</h3>
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
