import React from 'react';

//Modal 
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//CSS
import "./portfolio.css";

//Styling
import { makeStyles } from '@material-ui/core/styles';

//Floating Action Button
import Fab from '@material-ui/core/Fab';

//icons
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import { pieces } from '../data/artInfo.js';

import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'relative',
        size: 'small',
    },

}));


function Portfolio() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);


    //Current Peice that is selected
    const [piece, setPiece] = React.useState(0);


    // opens the modal when a peice is selected
    const handleOpen = (key) => {
        setOpen(true);
        setPiece(key);

        console.log("Opening Artwork ID: ", key);
    };

    // handles closing the modal
    const handleClose = () => {
        setOpen(false);
    };

    // moves to the next peice in the modal 
    const handleNext = () => {
        if (piece === pieces.length - 1) {
            setPiece(0);
        }
        else {
            setPiece(prevP => prevP + 1);
        }
    }

    // moves to the previous peice in the modal
    const handlePrev = () => {
        if (piece === 0) {
            setPiece(pieces.length - 1);
        }
        else {
            setPiece(prevP => prevP - 1)
        }
    }


    return (
        <body class='body'>
            <h1>
                Portfolio Page
            </h1>
            <p>
                The pieces I chose to include in my portfolio include school assignments, personal pieces, and pieces I created for others.
            </p>

            <p>
                click on any image to enhance and read details.
            </p>

            <p>
                Click the arrows to switch to the next or previous image.
            </p>


            {/* Mapping through the Pieces data and presenting them in the container  */}
            {pieces.map((p, key) =>
                <div class='container'>
                    <img src={p.source} alt={p.name} class='image' onClick={(e) => handleOpen(key)} />

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
                        <div class='fabContainerLeft'>
                            <Fab color="primary" className={classes.fab} onClick={handlePrev}>
                                <AiOutlineArrowLeft />
                            </Fab>
                        </div>
                            <img src={pieces[piece].source} alt={pieces[piece].name} class='imageInside' />
                        <div class='fabContainerRight'>
                            <Fab color="primary" className={classes.fab} onClick={handleNext}>
                                <AiOutlineArrowRight />
                            </Fab>
                        </div>
                        <h2 id="transition-modal-title">{pieces[piece].name}</h2>

                        <p id="medium">Medium: {pieces[piece].medium}</p>

                        <p id="description">{pieces[piece].desc}</p>



                    </div>
                </Fade>
            </Modal>

        </body>
    );
}

export default Portfolio;