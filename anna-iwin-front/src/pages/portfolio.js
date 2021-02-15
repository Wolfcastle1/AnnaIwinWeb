import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { getAverageColor } from 'fast-average-color-node';

import "./portfolio.css";




//Pieces
import annaPic from '../art/annaPic.JPG';
import classicStatue from '../art/classicStatue.jpg';
import spaceFace from '../art/spaceFace.jpg';
import speederman from '../art/speederman.jpeg';
import hannahElf from '../art/hannahElf.jpeg';
import GoodnightMoon from '../art/Goodnight_Moon.jpg';
import Citrus from '../art/Cictrus.jpg';
import FairyForest from '../art/Fairy_Forest.jpg';
import MushroomDate from '../art/Mushroom_date.jpg';
import GreenSweater from  '../art/Green_sweater.jpg';
import FantasyCL from '../art/Fantasy_Character_lineup.jpg';
import FantasyScene from '../art/Fantasy_scene.jpg';
import IsoTree from '../art/Isometric_treehouse.jpg'; 
import Queen from '../art/Queen.jpg'; 
import WitchPatt from '../art/Witchy_pattern.jpg'; 
import DeerGirl from '../art/Deer_Girl.jpeg'; 
import TigerBomb from '../art/Tiger_Bomb.jpeg'; 
import LastUnicorn from '../art/The_Last_Unicorn_cover.jpg'; 
import Bloom from '../art/Bloom.jpg'; 
import WitchesRoom from '../art/Witches_room.jpg'; 
import CoolCat from '../art/Cool_Cat.jpg'; 
import PetComm from '../art/Pet_commission.jpg';





import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
    // container: { //container holding the image and description

    //     width: "20vw",
    //     height: "20vw",
    //     padding: '10px',
    //     border: '5px solid purple',
    //     //margin: "auto",
    //     display: 'inline-block', 
    //     position: 'relative',

    // },
    // desc: { //hold information below the picture
    //     padding: "5px",
    //     textAlign: "center",
    // },
    // image: { //picture in gallery
    //     width: '20vw',
    //     height: '',
    //     cursor: "pointer", 
    //     //WIP
    //     //position: 'relative',
    //     position: 'relative',
    //     margin: 'auto',
    // },
    // imageInside: { //picture in modal-paper
    //     ["@media (orientation: landscape)"]: { //when the screen is in landscape
    //         height: '60vh',
    //     },
    //     ["@media (orientation: portrait)"]: {  //when the screen is in portrait
    //         width: '60vw',
    //     },
    // },
    // modal: { //modal holding paper div
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',

    // },
    // paper: { //paper holding picture, name, and information
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    //     ["@media (orientation: landscape)"]: { //when the screen is in landscape
    //         height: '90vh',
    //         width: '70vw',
    //     },
    //     ["@media (orientation: portrait)"]: {  //when the screen is in portrait
    //         width: '70vw',
    //     },
    //     //height: 'auto',
    //     //width: '50vw',
    //     textAlign: 'center',

    // },
    // body: {
    //     textAlign: 'center',
    // },
}));


function Portfolio() {

    //Style
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [num, setNum] = React.useState(5);

    //Data on peices and information 
    const pieces = [
        { name: "Goodnight Moon", source: GoodnightMoon, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Citrus", source: Citrus, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Fairy Forest", source: FairyForest, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Mushroom Date", source: MushroomDate, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Green Sweater", source: GreenSweater, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Spider Serg", source: speederman, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Fantasy Character Lineup", source: FantasyCL, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Fantasy Scene", source: FantasyScene, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Isometric Treehouse", source: IsoTree, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Queen", source: Queen, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Witchy Pattern", source: WitchPatt, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Deer Girl", source: DeerGirl, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Statue", source: classicStatue, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Tiger Bomb", source: TigerBomb, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Dizzy Dreamer", source: spaceFace, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Mushroom Girl", source: hannahElf, color: null, desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "The Last Unicorn", source: LastUnicorn, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Bloom", source: Bloom, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Witches Room", source: WitchesRoom, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Cool Cat", source: CoolCat, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
        { name: "Pet Commission", source: PetComm, color: null, medium: '', desc: "Duis a porttitor ligula, in consequat nisi. Integer eu massa ac lorem suscipit tincidunt sed id nisi. Proin ultricies enim quis turpis volutpat sodales. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur congue nulla, id luctus lorem fermentum sit amet. Proin egestas elit erat, convallis congue leo aliquam sit amet." },
    ];

    //Current Peice that is selected
    const [piece, setPiece] = React.useState(0);


    const handleOpen = (key) => {
        setOpen(true);
        setPiece(key);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /*
        useEffect(() => {
            pieces.map((p, key) => {
                getAverageColor(p.source).then(col => {
                    p.color = col.rgb;
                    console.log(col);
                    console.log("hello" + p.color);
                });
            });
        });
      */  
    return (
        <body class='body'>
            <h1>
                Portfolio Page
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nisl a neque sodales egestas nec eu erat. Nullam aliquet mi in porttitor cursus. Praesent nec pretium leo, in lacinia dui. Etiam pellentesque leo nec ante placerat porttitor. Nulla euismod gravida scelerisque. Mauris consequat, ipsum ut dignissim malesuada, odio justo euismod turpis, eu iaculis augue ex eu lorem. Nulla sed molestie risus. Nulla a urna eu felis ultricies convallis. Nullam porttitor, lectus sed ullamcorper mattis, arcu tellus tristique dui, ac dapibus massa risus at quam.
            </p>

            {pieces.map((p, key) =>
                    <div class='container'>
                    <img src={p.source} class='image' onClick={(e) => handleOpen(key)} />
                    
                </div>
            )}




            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                class='modal'
                //className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div class='paper'>
                        <img src={pieces[piece].source} backgroundColor={pieces[piece].color} class='imageInside' />
                        <h2 id="transition-modal-title">{pieces[piece].name}</h2>
                        <p id="transition-modal-description">{pieces[piece].desc}</p>
                    </div>
                </Fade>
            </Modal>

        </body>
    );
}

export default Portfolio;